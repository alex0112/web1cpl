#!/bin/bash

if [ ! -e "./build/index.html" ]; then
    echo "Unable to find an index file at build/index.html! Aborting..."
    exit 1
fi

echo "TODO: make a surge domain for this site"

#surge --domain kingsfoil.surge.sh ./build
