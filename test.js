const exec = require('child_process').exec
const globby = require('globby')
const assert = require('assert')

it('🎉  Ecma V should pass when checking an array of es5 files as es5', (done) => {
  exec('node index.js check ecma5 ./tests/es5.js ./tests/es5-2.js', (err, stdout, stderr) => {
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

it('👌  Ecma V should fail when checking an array of es6 files as es5', (done) => {
  exec('node index.js check ecma5 ./tests/es6.js ./tests/es6-2.js', (err, stdout, stderr) => {
    assert(err)
    console.log(stdout)
    done()
  })
})



it('🎉  Ecma V should pass when checking a glob of es6 files ', (done) => {
  exec('node index.js check ecma6 ./tests/*.js', (err, stdout, stderr) => {
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

it('👌  Ecma V should fail when checking a glob of es5 files', (done) => {
  exec('node index.js check ecma5 ./tests/*.js', (err, stdout, stderr) => {
    assert(err)
    console.log(stdout)
    done()
  })
})

