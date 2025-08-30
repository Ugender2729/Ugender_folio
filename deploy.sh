#!/bin/bash

# Build the project
npm run build

# Create a new branch for GitHub Pages
git checkout -b gh-pages

# Remove the out directory from .gitignore temporarily
sed -i '/\/out\//d' .gitignore

# Add the out directory
git add out/

# Commit the changes
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
git push origin gh-pages

# Go back to main branch
git checkout main

# Restore .gitignore
echo "/out/" >> .gitignore

echo "Deployment completed! Your portfolio is now available at:"
echo "https://ugender2729.github.io/portfolio/"
