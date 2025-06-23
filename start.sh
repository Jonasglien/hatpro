#!/bin/sh

# Use PORT environment variable if set, otherwise default to 3000
PORT=${PORT:-3000}

echo "Starting server on port $PORT"

# Try different ways to find serve
if command -v serve >/dev/null 2>&1; then
    echo "Using global serve"
    serve -s dist -p $PORT
elif [ -f "./node_modules/.bin/serve" ]; then
    echo "Using local serve binary"
    ./node_modules/.bin/serve -s dist -p $PORT
elif command -v npx >/dev/null 2>&1; then
    echo "Using npx serve"
    npx serve -s dist -p $PORT
else
    echo "serve not found, trying node directly"
    node ./node_modules/serve/bin/serve.js -s dist -p $PORT
fi 