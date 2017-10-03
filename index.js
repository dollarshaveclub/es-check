#!/usr/bin/env node
const prog = require('caporal')
const acorn = require('acorn')
const glob = require('glob')
const fs = require('fs')

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
            e = '3'
            break
        case 'ecma4':
            e = '4'
            break
        case 'ecma6':
            e = '6'
            break
        case 'ecma7':
            e = '7'
            break
        case 'ecma8':
            e = '8'
            break
        default:
            e = '5'
        }

        const errors = []

        // loop through files array
        files.forEach((file) => {
            const f = file

            glob(f, options, function (er, files) {

                files.forEach(file => {
                    const result = acorn.parse(fs.readFileSync(file, 'utf8'), {
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
        })

        const matchedErrors = errors.length
        if (matchedErrors <= 0) {
            logger.info(`🏆  Ecma-v: there were ${matchedErrors} matching errors!`)
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
