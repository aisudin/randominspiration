import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const currentDirectory = dirname(fileURLToPath(import.meta.url));
const quotesPath = path.join(currentDirectory, 'quotes.json');

// Define fallback quotes with the topic 'motivation'
const fallbackQuotes = [
    { quote: "Your favorite quote 1", author: "Unknown", topic: "motivation" },
    { quote: "Your favorite quote 2", author: "Unknown", topic: "motivation" },
    // Add more fallback quotes as needed
];

// Define additional topics to expand the quote pool
const additionalTopics = ["society", "god", "religion", "science", "identity"];

let cachedQuotes = null;

/**
 * Reads quotes from a JSON file and caches the result.
 * @returns {Promise<Object[]>} A promise that resolves to an array of quote objects.
 * @throws Will throw an error if the file is empty or contains invalid JSON.
 */
async function getQuotes() {
    if (cachedQuotes) {
        return cachedQuotes;
    }

    try {
        const data = await fs.promises.readFile(quotesPath, 'utf-8');
        const quotes = JSON.parse(data);
        if (!Array.isArray(quotes) || quotes.length === 0) {
            throw new Error('Invalid quotes data: Expected a non-empty array of quote objects.');
        }
        cachedQuotes = quotes;
        return cachedQuotes;
    } catch (error) {
        console.error('Error reading quotes file:', error);
        throw error;
    }
}

/**
 * Selects and returns a formatted quote string based on the provided parameter.
 * If the parameter matches an author, returns a formatted quote from that author.
 * If there are fewer than 20 quotes for the matched author, adds quotes from a random topic from additionalTopics.
 * Falls back to quotes with the 'motivation' topic if no matching author or topic is found.
 * @param {string} [parameter] - An optional string specifying the type of quote to return ('author', 'topic', or specific name).
 * @returns {Promise<string|null>} A promise that resolves to a formatted quote string or null if no quotes are found.
 */
async function deliverQuotes(parameter) {
    try {
        const quotes = await getQuotes();
        const lowerCaseParameter = parameter ? parameter.toLowerCase() : '';

        if (parameter) {
            // Find all quotes that match the parameter
            const specificQuotes = quotes.filter(quote =>
                (quote.author && quote.author.toLowerCase().includes(lowerCaseParameter)) ||
                (quote.topic && quote.topic.toLowerCase() === lowerCaseParameter)
            );

            if (specificQuotes.length > 0) {
                // If specific quotes are found, return a random quote from these
                return formatQuote(specificQuotes[Math.floor(Math.random() * specificQuotes.length)]);
            }

            // If fewer than 20 quotes for a specific author, include quotes from additional topics
            if (specificQuotes.length < 20) {
                const additionalQuotes = additionalTopics
                    .filter(topic => topic !== lowerCaseParameter) // Avoid repeating the initial topic
                    .map(topic => quotes.filter(quote => quote.topic.toLowerCase() === topic))
                    .flat(); // Flatten the array of arrays

                const combinedQuotes = specificQuotes.concat(additionalQuotes);
                if (combinedQuotes.length > 0) {
                    return formatQuote(combinedQuotes[Math.floor(Math.random() * combinedQuotes.length)]);
                }
            }

            return null;
        }

        // Default case: Return a random quote from the 'motivation' topic
        const motivationQuotes = quotes.filter(quote => quote.topic === 'motivation');
        if (motivationQuotes.length === 0) {
            return null; // Return null if no motivation quotes are available
        }
        return formatQuote(motivationQuotes[Math.floor(Math.random() * motivationQuotes.length)]);

    } catch (error) {
        console.error('Failed to deliver quote:', error);
        throw error;
    }
}

/**
 * Formats a quote object into a string.
 * @param {Object} quote - The quote object to format.
 * @returns {string} The formatted quote string.
 */
function formatQuote(quote) {
    return `${quote.quote} — ${quote.author}`;
}

export { deliverQuotes };