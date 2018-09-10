'use strict'

const exec = require('child_process').exec
const assert = require('assert')

it('🎉  Es Check should pass when checking an array of es5 files as es5', (done) => {
  exec('node index.js es5 ./tests/es5.js ./tests/es5-2.js', (err, stdout, stderr) => {
    if (err) {
      console.error(err.stack)
      console.error(stdout.toString())
      console.error(stderr.toString())
      done(err)
      return
    }
    done()
  })
})

it('🎉  Es Check should pass when checking a file with a hash bang', (done) => {
  exec('node index.js --allow-hash-bang true es6 index.js', (err, stdout, stderr) => {
    if (err) {
      console.error(err.stack)
      console.error(stdout.toString())
      console.error(stderr.toString())
      done(err)
      return
    }
    done()
  })
})

it('👌  Es Check should fail when checking an array of es6 files as es5', (done) => {
  exec('node index.js es5 ./tests/es6.js ./tests/es6-2.js', (err, stdout, stderr) => {
    assert(err)
    console.log(stdout)
    done()
  })
})

it('🎉  Es Check should pass when checking a glob of es6 files ', (done) => {
  exec('node index.js es6 ./tests/*.js', (err, stdout, stderr) => {
    if (err) {
      console.error(err.stack)
      console.error(stdout.toString())
      console.error(stderr.toString())
      done(err)
      return
    }
    done()
  })
})

it('👌  Es Check should fail when checking a glob of es5 files', (done) => {
  exec('node index.js es5 ./tests/*.js', (err, stdout, stderr) => {
    assert(err)
    console.log(stdout)
    done()
  })
})

it('👌  Es Check should fail when checking a glob of es6 modules without --module true', (done) => {
  exec('node index.js es6 ./tests/modules/*.js', (err, stdout, stderr) => {
    assert(err)
    console.log(stdout)
    done()
  })
})

it('🎉  Es Check should pass when checking a glob of es6 modules using the --module true flag', (done) => {
  exec('node index.js --module true es6 ./tests/modules/*.js', (err, stdout, stderr) => {
    if (err) {
      console.error(err.stack)
      console.error(stdout.toString())
      console.error(stderr.toString())
      done(err)
      return
    }
    done()
  })
})

it('👌 Es Check should read from an .escheckrc file for config', (done) => {
  exec('node index.js', (err, stdout, stderr) => {
    if (err) {
      console.error(err.stack)
      console.error(stdout.toString())
      console.error(stderr.toString())
      done(err)
      return
    }
    done()
  })
})
