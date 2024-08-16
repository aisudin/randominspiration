import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Determine the path to the quotes.json file
const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const quotesPath = path.join(currentDirectory, 'quotes.json');

// Default topics to use if no specific quotes are found
const fallbackTopics = ['motivation', 'god', 'religion', 'society', 'identity', 'science', 'evolution'];

// Initialize variables to store quotes and track delivered quotes
let cachedQuotes = [];         // Stores all quotes loaded from the file
let deliveredQuotes = new Set(); // Keeps track of quotes that have already been delivered
let temp = 0; // Variable to keep track of length of filteredQuotes when parameter is given

// Load quotes from the quotes.json file
async function loadQuotes() {
    try {
        // Read the quotes file and parse its content
        const data = await fs.readFile(quotesPath, 'utf-8');
        const quotes = JSON.parse(data);

        // Validate the quotes data
        if (!Array.isArray(quotes) || quotes.length === 0) {
            throw new Error('Invalid quotes data: Expected a non-empty array.');
        }
        cachedQuotes = quotes; // Cache the quotes for later use
    } catch (error) {
        throw error; // Propagate the error to be handled by the caller
    }
}

// Deliver a quote based on the provided parameter ('author' or 'topic')
async function deliverQuote(parameter) {
    try {
        // Load quotes from file if they are not already cached
        if (cachedQuotes.length === 0) {
            await loadQuotes();
        }

        let filteredQuotes = [];

        if (!parameter) {
            // No parameter provided, deliver quotes from the topic 'motivation'
            const motivationQuotes = cachedQuotes.filter(quote =>
                quote.topic.toLowerCase() === 'motivation');
            
            // Filter out quotes that have already been delivered
            filteredQuotes = motivationQuotes.filter(quote => 
                !deliveredQuotes.has(JSON.stringify(quote)));

            if (filteredQuotes.length === 0) {
                filteredQuotes=cachedQuotes; // When all quotes from the 'motivation' topic is delivered use the entire cachedQuotes.
            }
        } else {
            // Parameter provided, filter quotes based on the parameter
            const lowerCaseParameter = parameter.toLowerCase();
            const authorQuotes = cachedQuotes.filter(quote =>
                quote.author.toLowerCase().includes(lowerCaseParameter));
            const topicQuotes = cachedQuotes.filter(quote =>
                quote.topic.toLowerCase().includes(lowerCaseParameter));

            filteredQuotes = [...authorQuotes, ...topicQuotes];
            filteredQuotes = filteredQuotes.filter(quote => !deliveredQuotes.has(JSON.stringify(quote)));
            
            // Store the initial count of quotes
            temp = filteredQuotes.length;

            // If no quotes are available and temp was less than 30, use fallback topics
            if (temp < 30 && filteredQuotes.length === 0) {
                const randomTopic = fallbackTopics[Math.floor(Math.random() * fallbackTopics.length)];
                const additionalQuotes = cachedQuotes.filter(quote =>
                    quote.topic.toLowerCase().includes(randomTopic) &&
                    !deliveredQuotes.has(JSON.stringify(quote)));
                
                filteredQuotes = [...filteredQuotes, ...additionalQuotes];
                filteredQuotes = filteredQuotes.filter(quote => !deliveredQuotes.has(JSON.stringify(quote)));
            }

            // If still no quotes are available, use fallback topics
            if (filteredQuotes.length === 0) {
                const randomTopic = fallbackTopics[Math.floor(Math.random() * fallbackTopics.length)];

                filteredQuotes = cachedQuotes.filter(quote =>
                    quote.topic.toLowerCase().includes(randomTopic) &&
                    !deliveredQuotes.has(JSON.stringify(quote)));
            }
        }

        // If still no quotes are available, return null
        if (filteredQuotes.length === 0) {
            return null; // No quotes available
        }

        // Pick a random quote from the available ones
        const quoteToDeliver = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
        deliveredQuotes.add(JSON.stringify(quoteToDeliver)); // Track the delivered quote

        return formatQuote(quoteToDeliver); // Format and return the selected quote
    } catch (error) {
        throw error; // Propagate the error to be handled by the caller
    }
}

// Format the quote for output in a readable format
function formatQuote(quote) {
    return `${quote.quote} — ${quote.author}`; // Return the quote and author in the format: "Quote — Author"
}

export { deliverQuote }; // Export the function for use in other modules