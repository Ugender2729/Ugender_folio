# PowerShell script to deploy portfolio to GitHub Pages

Write-Host "🚀 Starting deployment to GitHub Pages..." -ForegroundColor Green

# Build the project
Write-Host "📦 Building the project..." -ForegroundColor Yellow
npm run build

# Create a new branch for GitHub Pages
Write-Host "🌿 Creating gh-pages branch..." -ForegroundColor Yellow
git checkout -b gh-pages

# Remove the out directory from .gitignore temporarily
Write-Host "📝 Updating .gitignore..." -ForegroundColor Yellow
$gitignoreContent = Get-Content .gitignore
$gitignoreContent = $gitignoreContent | Where-Object { $_ -ne "/out/" }
$gitignoreContent | Set-Content .gitignore

# Add the out directory
Write-Host "➕ Adding out directory to git..." -ForegroundColor Yellow
git add out/

# Commit the changes
Write-Host "💾 Committing changes..." -ForegroundColor Yellow
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
Write-Host "🚀 Pushing to gh-pages branch..." -ForegroundColor Yellow
git push origin gh-pages

# Go back to main branch
Write-Host "🔄 Switching back to main branch..." -ForegroundColor Yellow
git checkout main

# Restore .gitignore
Write-Host "📝 Restoring .gitignore..." -ForegroundColor Yellow
Add-Content .gitignore "/out/"

Write-Host "✅ Deployment completed successfully!" -ForegroundColor Green
Write-Host "🌐 Your portfolio is now available at:" -ForegroundColor Cyan
Write-Host "   https://ugender2729.github.io/portfolio/" -ForegroundColor White
Write-Host ""
Write-Host "📋 Next steps:" -ForegroundColor Yellow
Write-Host "   1. Go to your GitHub repository settings" -ForegroundColor White
Write-Host "   2. Navigate to Pages section" -ForegroundColor White
Write-Host "   3. Set source to 'gh-pages' branch" -ForegroundColor White
Write-Host "   4. Save and wait a few minutes for deployment" -ForegroundColor White
