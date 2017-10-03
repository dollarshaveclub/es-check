<h1 align="center">Ecma V</h1>
<h5 align="center">Check files version of ecmascript with simple scripts 🏆</h5>

----

<p align="center">
  <a href="#api">API</a>&nbsp;&nbsp;
  <a href="#usage">Usage</a>&nbsp;&nbsp;
  <a href="#why">Why Ecma-V?</a>&nbsp;&nbsp;
  <a href="#contributing">Contributing</a>&nbsp;&nbsp;
  <a href="/issues"issues</a>  
</p>

----

**Ecma V** ensures that the specified version of EcmaScript (JavaScript) is matches the EcmaScript of each file in a glob with a a given shell script. If the specified Ecmascript version is incorrect within a JavaScript file(s), Ecma V will through an error. This is important in a [modular]() [bundled]() world. 

----

## API

Ecma V provides the bear necessities. It accepts its place as a JavaScript matcher.

```sh
Ecma V 0.0.1

USAGE

index.js ecma-v -ev, --ecma-version <ecma-version> -f, --files <files>

ARGUMENTS

  -ev, --ecma-version <ecma-version>, define the EcmaScript version to check for against a glob of JavaScript files, required
  -f, --files <files>, a glob of files to to test the EcmaScript version against, required

GLOBAL OPTIONS

  -h, --help         Display help
  -V, --version      Display version
  --no-color         Disable colors
  --quiet            Quiet mode - only displays warn and error messages
  -v, --verbose      Verbose mode - will also output debug messages
```

----

## Usage

Ecma V is a shell command CLI. It is run via a shell tool(http://linuxcommand.org/lc3_learning_the_shell.php) like Terminal, ITerm, or Hyper. It takes in two arguments: an [Ecmascript version](https://www.w3schools.com/js/js_versions.asp) (`--ec, --ecma-version <ecma-version>`) and files (`--f, --files) in [globs](http://searchsecurity.techtarget.com/definition/globbing).

Here are some example of **Ecma V** scripts that could be run:

```sh
# global
ecma-v -ec ecma5 -f ./js/*.js

# project
bin/ecma-v -ed ecma5 -f ./js/*.js

# with a files array
ecma-v -ec ecma5 -f ./js/*.js ./files/*.js
```

----


<h2 id="why">Why Ecma-V?</h2>

In modern Front End Software builds, files are bundled up so they can be served in an optimized manner in the browsers. It is generally assumed by developers that Future JavaScript—like ES8 will be transpiled (changed from future JavaScript to current JavaScript) appropriately by a tool like Babel. Sometimes there is an issue where files are not transpiled. There was no efficient way to test for files that weren't transpiled—until now. That's what Ecma V does.

----

## Contributing

Ecma V is dependent on 3 tools: [acorn](https://github.com/ternjs/acorn/), [glob](https://www.npmjs.com/package/glob), and [caporal](https://github.com/mattallty/Caporal.js). To contribute, file an [issue](https://github.com/dollarshaveclub/ecma-v/issues) or submit a pull request.

----


