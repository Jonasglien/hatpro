#!/bin/sh

# Use PORT environment variable if set, otherwise default to 3000
PORT=${PORT:-3000}

echo "Starting server on port $PORT"
npx serve -s dist -p $PORT 