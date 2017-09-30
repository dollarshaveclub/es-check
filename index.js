const acorn = require('acorn')
const glob = require('glob')

const argsArray = process.argv

// define ecmaScript version
let ecmaV
argsArray.forEach((arg) => {
    switch (arg) {
    case arg === '--ecma3':
        ecmaV = '--ecma3'
        break
    case arg === '--ecma4':
        ecmaV = '--ecma4'
        break
    case arg === '--ecma6':
        ecmaV = '--ecma6'
        break
    case arg === '--ecma7':
        ecmaV = '--ecma7'
        break
    case arg === '--ecma8':
        ecmaV = '--ecma8'
        break
    default:
        ecmaV = '--ecma5'
    }
})

/*
  composeArr
  ----
  compose the correct array to check files on

*/
const composeArr = (string) => {
    const a = argsArray
    // check for file arguments
    const hasTextArg = a.indexOf(string) ? true : false

    if (hasTextArg === false) {
        console.warn('No files to test.')
    }
    // get the argument element total
    const arrayCount = a.length
    // get this index of the start of file elements
    const arrayStart = arrayNum + 1
    // split into another array removing the first unneeded elements
    const splitArray = a.splice(arrayStart, arrayCount)

    let match = false
    // define the end of the slit array
    const arrayEnd = splitArray.forEach((el) => {
        if (match === true) return
        const e = el
        // match text in array elements
        if (e.indexOf('--') !== 1) {
            match = true
            return filesArg.indexOf(e) - 1
        }
        return filesArray.length
    })
    // split the array again to only what is needed
    return a.splice(filesArgStart, argCount)
}

const filesArray = composeArr('--files')

files.forEach((file) => {
    const f = file
    /*
    Glob files
    ----
    https://www.npmjs.com/package/glob
  */
    glob(f, options, function (er, files) {
    /*
      Figure out ecmascript version using acorn
      ----
      https://www.npmjs.com/package/acorn
    */
        const result = acorn.parse(f, {
            ecmaVersion: ecmaV,
            silent: true,
        })
        if (typeof result !== 'Object')
            throw Error(`FAIL: ${f} does not match the expected version`)
        else console.log(`PASS: ${f} matches`)
    })
})
