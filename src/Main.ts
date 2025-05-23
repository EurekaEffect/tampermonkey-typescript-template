;(async function () {
    console.log('You will see this prompt each time you open a new tab.')

    console.log(window)         // Returns 'Proxy'.
    console.log(getWindow())    // Returns 'Window', a proper one.
})()

// You are not allowed to use 'window' using TamperMonkey.
// Use this method instead.
function getWindow(): Window {
    // @ts-ignore
    return unsafeWindow
}