import fs from 'fs';

async function getQuotes() {
    try {
        const data = await fs.promises.readFile('quotes.txt', 'utf-8');
        if (!data.trim()) {
            throw new Error('File is empty or contains only whitespace.');
        }
        return data.split('\n').map(line => line.trim()).filter(line => line !== '');
    } catch (error) {
        console.error('Error reading quotes file:', error);
        throw error; // Rethrow to propagate the error up the call stack
    }
}

async function deliverQuotes() {
    try {
        const quotes = await getQuotes();
        if (quotes.length === 0) {
            console.error('No valid quotes found.');
            return;
        }
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        console.log(randomQuote);
    } catch (error) {
        console.error('Failed to output quote:', error);
    }
}

export { deliverQuotes };