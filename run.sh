#!/bin/bash

echo "Running phantomjs"
#phantomjs scrape.js

echo "Processing JSON -> RSS"
node process.js
