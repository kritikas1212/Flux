#!/bin/bash

# Flux Theme - Start Development Server
# This script safely starts the Shopify theme development server

echo "🚀 Starting Flux Theme Development Server..."
echo ""

# Check if port 9292 is in use
if lsof -ti:9292 > /dev/null 2>&1; then
    echo "⚠️  Port 9292 is already in use"
    echo ""
    echo "Options:"
    echo "  1) Kill existing process and restart"
    echo "  2) Use a different port (3000)"
    echo "  3) Cancel"
    echo ""
    read -p "Choose option (1/2/3): " choice
    
    case $choice in
        1)
            echo ""
            echo "🛑 Stopping existing processes..."
            kill -9 $(lsof -ti:9292) 2>/dev/null
            sleep 2
            echo "✅ Port 9292 is now free"
            echo ""
            echo "🚀 Starting development server..."
            shopify theme dev --open
            ;;
        2)
            echo ""
            echo "🚀 Starting on port 3000..."
            shopify theme dev --port 3000 --open
            ;;
        3)
            echo ""
            echo "❌ Cancelled"
            exit 0
            ;;
        *)
            echo ""
            echo "❌ Invalid option"
            exit 1
            ;;
    esac
else
    # Port is free, start normally
    echo "✅ Port 9292 is available"
    echo ""
    echo "🚀 Starting development server..."
    echo ""
    shopify theme dev --open
fi

