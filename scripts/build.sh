#!/bin/bash

echo "Building..."
cat content.md | pandoc -f markdown -t html | cat ./fragments/head.html - ./fragments/tail.html > ./build/index.html
