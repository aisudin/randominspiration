import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const quotesPath = path.join(__dirname, 'quotes.txt');

/**
 * Reads quotes from a file and returns an array of non-empty quotes.
 * @returns {Promise<string[]>} A promise that resolves to an array of quotes.
 * @throws Will throw an error if the file is empty or contains only whitespace.
 */
async function getQuotes() {
    try {
        const data = await fs.promises.readFile(quotesPath, 'utf-8');
        const lines = data.split('\n').map(line => line.trim()).filter(line => line !== '');
        if (lines.length === 0) {
            throw new Error('File is empty or contains only whitespace.');
        }
        return lines;
    } catch (error) {
        console.error('Error reading quotes file:', error);
        throw error;
    }
}

/**
 * Selects and returns a random quote from the quotes file.
 * @returns {Promise<string | null>} A promise that resolves to a random quote, or null if no quotes are found.
 */
async function deliverQuotes() {
    try {
        const quotes = await getQuotes();
        if (quotes.length === 0) {
            return null; // Return null if no valid quotes are found
        }
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    } catch (error) {
        console.error('Failed to deliver quote:', error);
        throw error; // Propagate the error to the caller
    }
}

export { deliverQuotes };