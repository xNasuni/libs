# Library Usage
- This will show you on how to use the librarys.

| Library | Type |
| ----------- | ----------- |
| ansicolors.js | Color |
| betteroutput.js | Utility |

---
## Ansi Color Usage
```js
// Defining the library.
const colors = require('./ansicolors.js'); // Change file name as needed.

// Let's print a Bright Blue "HELLO WORLD" to the console.
console.log(
  colors.foreBrightBlue, // Bright Blue,
  'Hello World', // The String,
  colors.reset // Reset the color.
);
```
##
```js
> "Hello World"
```
## Better Output Usage
```js
// Defining the library.
const betteroutput = require('./betteroutput.js'); // Change file name as needed.

// Let's make a function that takes input and runs it, but with an error handler.
function Run(Code) {
  try {
    eval(Code) // Run the string
  } catch(err) {
    betteroutput.error(err) // Call the error function
  }
};
```
##
```js
Run(`console.log("Hello World");`) // Doesn't error.

> "Hello World"
```
##
```js
Run(`console.log(value_that_doesnt_exist);`) // Errors because that value is not defined.

> "✕ [ERROR] - ReferenceError: value_that_doesnt_exist is not defined"
```
---

## Library Checklist

- [x] Ansi Color Library
- [x] Better Output Library
- [ ] Http Requests Library
- [ ] General Utility Library
- [ ] Date & Time Library
