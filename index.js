#!/usr/bin/env node
const prog = require('caporal')
const acorn = require('acorn')
const glob = require('glob')

const pkg = require('./package.json')
const argsArray = process.argv

/*
  ecma-v 🏆
  ----
  - define the EcmaScript version to check for against a glob of JavaScript files
  - match the EcmaScript version option against a glob of files
    to to test the EcmaScript version of each file
  - error failures

*/
prog
  .version(pkg.version)
  .command('ecma-v')
  .argument(
    '<ecma-version>',
    'define the EcmaScript version to check for against a glob of JavaScript files'
  ).argument(
    '[files...]',
    'a glob of files to to test the EcmaScript version against'
  ).action((args, options,  logger) => {
    const v = args.ecmaVersion
    const files = args.files
    let e
    // define ecmaScript version
    switch (v) {
      case 'ecma3':
          e = '--ecma3'
          break
      case 'ecma4':
          e = 'ecma4'
          break
      case 'ecma6':
          e = 'ecma6'
          break
      case 'ecma7':
          e = '--ecma7'
          break
      case 'ecma8':
          e = '--ecma8'
          break
      default:
          e = '--ecma5'
    }

    const errors = []

    // loop through files array
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
            ecmaVersion: e,
            silent: true,
        })
        if (typeof result === 'Object') {
          logger.info(`✅  Ecma-v: '${f}' matches ${e}`)
        }
        errors.push(f)
        logger.error(`Ecma-v: ERROR '${f}' does not match ${e}`)
      })
    })
    const matchedErrors = errors.length
    if (matchedErrors <= 0) {
      logger.info(`🏆  Ecma-v: there were ${matchedErrors}  matching errors!`)
      return
    } else {
      logger.warn(`Ecma-v: there were ${matchedErrors} matching errors against ${e}.`)
      logger.warn(`- These files did not match:`)
      errors.forEach((error) => {
        const str = error.toString
        logger.info(`-- ${str}\n`)
      })
      return
    }
  })


prog.parse(process.argv)
