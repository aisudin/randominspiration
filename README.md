
# Random Inspiration
A Node.js package that provides randomly generated inspirational quotes. This package was built for learning purposes and may have some quirks.

## Installation
You can install the package using npm:
```bash
npm  install  randominspiration
```
   
## Importing the Package
    
 **For ES Modules (ECMAScript Modules):**
``` 
    import { deliverQuotes } from 'randominspiration'; 
```   
 **For CommonJS Modules:**
```
    const { deliverQuotes } = require('randominspiration');
```    
**Using the `deliverQuotes` Function**
    
Since `deliverQuotes` is an asynchronous function, you need to handle it using `async`/`await` or `.then()` and `.catch()` to deal with the returned promise.
    
**Using `async`/`await`:**

***Minimalist approach(without error handling)***
```
(async () => { 
	const quote = await deliverQuotes();
	console.log(quote); 
})();
```
***Recommended approach(Error handling)***
```
(async () => {
        try {
            const quote = await deliverQuotes();
            if (quote) {
                console.log(quote);
            } 
            else {
                console.log('No quotes available.');
            }
        } catch (error) {
            console.error('Error occurred while fetching the quote:', error);
        }
})(); 
```    
**Using Promises with `.then()` and `.catch()`:**
 ```
deliverQuotes()
        .then(quote => {
            if (quote) {
                console.log(quote);
            } else {
                console.log('No quotes available.');
            }
        })
        .catch(error => {
            console.error('Error occurred while fetching the quote:', error);
});
```    

### License

This project is licensed under the MIT License - see the LICENSE file for details.
> Written with [StackEdit](https://stackedit.io/).