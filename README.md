The async and await keywords help us in handling Promises in a more convenient way and it is more readable than regular promise handling using then() and catch()

The await keyword should only be used inside an async function.

If we use async before any function then the function will return a Promise. If the function is not returning any Promise explicitly then it will wrap a Promise around the return value implicitly.

he await keyword waits for a Promise and pauses the code in that line until the Promise gets resolved. Remember the await keyword should always be used inside async function otherwise, it will throw an error.
