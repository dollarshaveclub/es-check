#!/bin/bash

# variables
FILES=$2
VERSION=$1

# Run `. scripts/get-ecmascript-version.sh $VERSION $FILES
# Example `. scripts/update-repo.sh --ecma5 *.js

if [ -z "$VERSION" ]; then
  echo "For this script to find the ecmascript version of files, version arguments are need. The options are --ecma3, --ecma5, --ecma6, --ecma7"
  exit
fi

if [ -z "$FILES" ]; then
  echo "For this script to work a files argument must be provided, in example, ./script/file.js"
  exit
fi

echo 'Figuring out your ecmascript version'

for f in $FILES
do
  echo 'here'
  node_modules/acorn/bin/acorn $VERSION $f --silent
done
