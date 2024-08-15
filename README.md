
# Random Inspiration

## Table of Contents
- [Introduction](#introduction)
- [Usage](#usage)
- [Statistical Data](#statistical-data)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Welcome to the documentation for **Random Inspiration**. This package delivers a single random quote based on a specified topic or author, or provides a random quote without any specific criteria.


## Usage

### Getting Started

To use this package, first install it using npm:

```bash
npm install randominspiration
```

Then, use it in your project:

### Basic Usage

```javascript
import { deliverQuotes } from 'randominspiration';

// Fetch a motivational quote (defaults to topic 'motivation')
deliverQuotes().then(quote => console.log(quote));

// Fetch a quote by topic
deliverQuotes('god').then(quote => console.log(quote));

// Fetch a quote by author
deliverQuotes('Albert Einstein').then(quote => console.log(quote));
```

### Minimalistic Async Usage with Variable and IIFE

```javascript
import { deliverQuotes } from 'randominspiration';
(async () => {
    const quote = await deliverQuotes(); // Optionally, pass a topic or author as argument
    console.log(quote); // Do something with the quote
})();
```

### Usage with Try-Catch

```javascript
import { deliverQuotes } from 'randominspiration';
const fetchQuote = async () => {
    try {
        const quote = await deliverQuotes('Albert Einstein');
        console.log(quote);
    } catch (error) {
        console.error('Failed to fetch quote:', error);
    }
};

fetchQuote();
```

[Back to Table of Contents](#table-of-contents)

## Statistical Data

Here is some detailed statistical information:

- **Total Number of Quotes**: 2107

- **Topics**: ability, absence, acquaintance, acting, action, adam and eve, admiration, adversity, advertising, advice, affliction, age, ambition, america, anger, animals, appearance, argument, art, bachelor, beauty, belief, bible, biography, birds, books, bread, brevity, business, capital and labor, care, cause, caution, change, character, charity, cheerfulness, childhood, choice, christ, christianity, circumstance, civilization, clergyman, clothes, commerce, commonsense, conquest, conscience, conservatism, man, manners, marriage, medicine, mind, moderation, modesty, money, months, morality, mother, mountain, music, mystery, name, nature, necessity, knowledge, science, neighbors, newness, news, night, opinion, opportunity, parting, passion, patience, peace, place, perseverance, pessimism, philosophy, poetry, politics, power, prayer, prejudice, pride, prison, proof, punishment, question, reason, reform, religion, revolution, riches, self knowledge, self reliance, ship, sin, silence, slavery, society, soldier, song, soul, speech, strength, success, sympathy, tale, talent, taste, thieves, time, thrift, toast, today, toleration, trees, trust, truth, tyranny, vice, victory, virtue, want, war, wickedness, weather, wife, will, wind, wine and spirits, wisdom, wish, wit, woman, wonder, wooing, word, work, world, worship, worth, wrong, youth, conversation, courage, cowardice, creation, criticism, cruelty, dancing, day, death, deception, deeds, democracy, desire, destiny, devil, difficulty, discretion, doubt, dream, drinking, duty, eating, economy, education, eloquence, enemy, egotism, england, enthusiasm, equality, evil, example, excellence, experience, face, faith, falsehood, fame, father, fate, fear, fishing, flattery, flowers, folly, forgetfulness, forgiveness, fortune, freedom, friendship, future, gambling, genius, gift, glory, gods, golden rule, goodness, government, grief, guilt, habit, hanging, happiness, hate, health, heart, heaven, hope, hero, honesty, horses, humanity, humility, husbands, ideas, ignorance, imagination, immortality, independence, influence, innocence, insanity, italy, jealousy, journalism, joy, judge, judgment, justice, kiss, language, law, leadership, lawyer, learning, liberty, life, like, light, lincoln, logic, love, lying, majority, prejudice , motivation, universe, god, identity, tragedy, self-esteem, ethics, evolution

- **Authors**: Chinese Proverb, Henry Wadsworth Longfellow, Napoleon Bonaparte, Corinthians, Bible, Homer, Anonymous, Thomas Fuller, Miguel De Cervantes, Samuel Johnson, George Herbert, James Russell Lowell, William Shakespeare, Luke, Bible, Johann Friedrich Von Schiller, Sophocles, Alfred Tennyson, Mark Twain, Thomas Hood, Ambrose Gwinnett Bierce, Rochefoucauld, Alexander Pope, Charles Caleb Colton, William Hazlitt, Benjamin Disraeli, George Norman Douglas, Thomas Jefferson, Horace, French Proverb, Publilius Syrus, Thomas Carlyle, Hebrews, Bible, Aeschylus, Francis Bacon, Benjamin Franklin, Oliver Wendell Holmes, The Book Of Psalms, Arthur Schopenhauer, Oscar Wilde, Marcus Tullius Cicero, Ralph Waldo Emerson, John Milton, Daniel Webster, Woodrow Wilson, William Congreve, John Dryden, Robert Green Ingersoll, Proverbs, George Eliot, Robert Burns, Lord Chesterfield, William Schwenck Gilbert, Matthew, Bible, Jonathan Swift, Lord Byron, The Book Of Ecclesiastes, Victor Hugo, Omar Khayyam, Durante Degli Alighieri Dante, Ben Jonson, Rudyard Kipling, John Keats, Clive Staples Lewis, Gaius Julius Caesar, Mark, Bible, Michel Eyquem De Montaigne, William Ellery Channing, Plutarch Lucius Mestrius Plutarchus, Edgar Allan Poe, Job, Bible, Charles Kingsley, Voltaire, John Heywood, John, Bible, Martin Luther, William Penn, Calvin Coolidge, Isaiah, Theodore Roosevelt, Abraham Lincoln, Thomas Chandler Haliburton, Confucius, Euripides, Robert Browning, Washington Irving, Wendell Phillips, Johann Wolfgang Von Goethe, Acts, William Makepeace Thackeray, English Proverb, Robert Louis Balfour Stevenson, Desiderius Erasmus Roterodamus, Thomas A Kempis, Jean-jacques Rousseau, Leo Tolstoy, Walter Scott, Socrates, Felicia Hemans, Edmund Burke, Robert Herrick, Thomas Paine, Plato, Oliver Goldsmith, Friedrich Nietzsche, Lucius Annaeus Seneca, Terence Publius Terentius Afer, Honore De Balzac, Book Of Common Prayer, Genesis, Bible, George Bernard Shaw, Aristotle, Henry David Thoreau, Timothy, Percy Bysshe Shelley, John Locke, Samuel Taylor Coleridge, Thomas Campbell, Thomas Moore, Leigh Hunt, Immanuel Kant, Francois Rabelais, Stephen Hawking, La Fontaine, Blaise Pascal, Joseph Joubert, St. Augustine, Herbert Spencer, Bertrand Russell, Christian Nestell Bovee, Jean-baptiste Poquelin Moliere, Romans, Bible, Walt Whitman, Edward George Earle Lytton Bulwer, Charles Dickens, George Washington, Henry Ward Beecher, Martin Luther King, Thomas Alva Edison, Winston Churchill, Patrick Henry, Dwight David Eisenhower, Albert Einstein, Gottfried Wilhelm Leibniz, Rabindranath Tagore, Baruch Spinoza, William James, Wayne Dyer, Leonardo Da Vinci, Georg Wilhelm Friedrich Hegel, Erich Fromm, Rene Descartes, David Hume, Mahatma Gandhi, Thomas Carlyle  , Frank Herbert, Roy T. Bennett, Walter Anderson, Herman Melville, Dale Carnegie, Unknown, Paulo Coelho, Thomas Edison, Epictetus, Dalai Lama, AI Sudin, Dr. Seuss, Geena Davis, Toni Morrison, Oprah Winfrey, F. Scott Fitzgerald, Robert Frost, Charles Schulz, Robert Louis Stevenson, Kofi Annan, Aage Niels Bohr, Jimmy Carter, Mairead Corrigan Maquire, Frederik Willem de Klerk, Mohamed ElBaradei, Gabriel Garcia Márquez, Mikhail Sergeyevich Gorbachev, Al Gore Jr., Seamus Heaney, John Hume, Mitski, Eckhart Tolle

[Back to Table of Contents](#table-of-contents)

## Contributing

If you would like to contribute to this project, here are some ways you can get involved:

### How to Contribute

1. **Fork the Repository**: [Fork the repository on GitHub](https://github.com/aisudin/randominspiration) to make your changes.
2. **Create a New Branch**: Create a new branch for your changes.
3. **Submit a Pull Request**: Open a pull request on GitHub with a detailed description of your changes.

### Reporting Issues

If you find a bug or have a feature request, please [open an issue on GitHub](https://github.com/aisudin/randominspiration/issues). Provide as much detail as possible to help me address the issue.

### Contact

For any other inquiries or if you need help, you can [email me](mailto:aisudin@gmail.com).

### Acknowledgments

Thank you for considering contributing to this project!

[Back to Table of Contents](#table-of-contents)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

[Back to Table of Contents](#table-of-contents)
