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
  .option(
    '-ev, --ecma-version <ecma-version>',
    'define the EcmaScript version to check for against a glob of JavaScript files',
    [ '--ecma3', '--ecma4', '--ecma5', '--ecma6', '--ecma7', '--ecma8' ],
  ).option(
    '-f, --files <files>',
    'a glob of files to to test the EcmaScript version against',
    prog.LIST,
  ).action((args, options,  logger) => {
    const e = options.ecmaVersion
    const files = options.files
    // define ecmaScript version
    switch (e) {
      case '--ecma3':
          e = '--ecma3'
          break
      case '--ecma4':
          e = '--ecma4'
          break
      case '--ecma6':
          e = '--ecma6'
          break
      case '--ecma7':
          e = '--ecma7'
          break
      case '--ecma8':
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
            ecmaVersion: ecmaV,
            silent: true,
        })
        if (typeof result === 'Object') {
          logger.info(`✅ ecma-v: '${f}' matches ${e}`)
        }
        errors.push(f)
        logger.error(`ecma-v: ERROR '${f}' does not match ${e}`)
      })
    })
    const matchedErrors = errors.length
    if (matchedErrors <= 0) {
      logger.info(`🏆 ecma-v: there were ${matchedErrors}  matching errors!`)
    } else {
      logger.info(`ecma-v: there were ${matchedErrors} matching errors against ${e}.`)
      logger.info(`- these files did not match:`)
      errors.forEach((error) => {
        const str = error.toString
        logger.info(`-- ${str}`)
      })
    }
  })


prog.parse(process.argv)
