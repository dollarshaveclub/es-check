#!/usr/bin/env node

const os = require('os')
const fs = require('fs')

const acorn = require('acorn')
const prog = require('caporal')
const globby = require('globby')
const pify = require('pify')
const pMap = require('p-map')

const pkg = require('./package.json')
const readFileAsync = pify(fs.readFile)
const argsArray = process.argv

/*
  es-check 🏆
  ----
  - define the EcmaScript version to check for against a glob of JavaScript files
  - match the EcmaScript version option against a glob of files
    to test the EcmaScript version of each file
  - error failures
*/
prog
  .version(pkg.version)
  .command('check')
  .alias('c')
  .argument(
    '<ecmaVersion>',
    'define the EcmaScript version to check for against a glob of JavaScript files'
  ).argument(
    '[files...]',
    'a glob of files to to test the EcmaScript version against'
  ).option(
    '-c, --concurrency <concurrency>',
    'number of concurrent workers for processing files',
    prog.INT,
    os.cpus().length
  ).action((args, options, logger) => {
    const v = args.ecmaVersion
    const files = args.files
    const concurrency = options.concurrency
    let e
    // define ecmaScript version
    switch (v) {
      case 'es3':
        e = '3'
        break
      case 'es4':
        e = '4'
        break
      case 'es5':
        e = '5'
        break
      case 'es6':
        e = '6'
        break
      case 'es7':
        e = '7'
        break
      case 'es8':
        e = '8'
        break
      case 'es2015':
        e = '5'
        break
      case 'es2016':
        e = '6'
        break
      case 'es2017':
        e = '7'
        break
      case 'es2018':
        e = '8'
        break
      default:
        e = '5'
    }

    globby(files)
      .then((paths) => {
        const errFiles = []
        const acornOpts = { ecmaVersion: e, silent: true }

        const processor = (file) => readFileAsync(file, 'utf8')
          .then((code) => {
            acorn.parse(code, acornOpts)
          })
          .catch((err) => {
            logger.debug(`ES-check: parsing error for ${file}: ${err}`)
            errFiles.push(file)
          })

        return pMap(paths, processor, { concurrency })
          .then(() => {
            if (errFiles.length > 0) {
              logger.error(`ES-check: there were ${errFiles.length} ES version matching errors.`)
              errFiles.forEach((file) => {
                logger.info(`\n es-check: error in: ${file}`)
              })
              process.exit(1)
            } else {
              logger.error(`ES-check: there were no ES version matching errors!  🎉`)
            }
          })
      })
      .catch((err) => {
        logger.error(`ES-check: unexpected error: ${err}`)
        process.exit(1)
      })
  })

prog.parse(argsArray)
