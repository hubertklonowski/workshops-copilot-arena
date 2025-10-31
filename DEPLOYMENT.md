# 🚀 GitHub Pages Deployment Guide

Step-by-step guide to deploy your portfolio to GitHub Pages.

## Prerequisites

- Git installed on your computer
- GitHub account
- Your portfolio files ready

## Method 1: Using Git Command Line

### Step 1: Initialize Git Repository

Open PowerShell in your portfolio folder and run:

```powershell
git init
git add .
git commit -m "Initial commit: Personal portfolio website"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com/)
2. Click the **+** icon in the top right
3. Select **New repository**
4. Name it (e.g., `portfolio` or `YOUR_USERNAME.github.io`)
5. **Do NOT** initialize with README, .gitignore, or license
6. Click **Create repository**

### Step 3: Push to GitHub

Copy the commands from GitHub and run:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**:
   - Select branch: `main`
   - Select folder: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes

Your site will be live at:
- If named `YOUR_USERNAME.github.io`: `https://YOUR_USERNAME.github.io/`
- If named something else: `https://YOUR_USERNAME.github.io/REPO_NAME/`

## Method 2: Using GitHub Desktop

### Step 1: Install GitHub Desktop

Download from [desktop.github.com](https://desktop.github.com/)

### Step 2: Add Your Repository

1. Open GitHub Desktop
2. File → **Add Local Repository**
3. Choose your portfolio folder
4. Click **Create Repository** if prompted
5. Enter description and click **Create Repository**

### Step 3: Publish to GitHub

1. Click **Publish repository** button
2. Choose repository name
3. Uncheck "Keep this code private" (or keep checked if you have Pro)
4. Click **Publish repository**

### Step 4: Enable GitHub Pages

Follow Step 4 from Method 1 above.

## Method 3: Using VS Code

### Step 1: Initialize Repository

1. Open portfolio folder in VS Code
2. Click Source Control icon (Ctrl+Shift+G)
3. Click **Initialize Repository**
4. Stage all changes (+ icon)
5. Enter commit message: "Initial commit"
6. Click ✓ to commit

### Step 2: Push to GitHub

1. Click **Publish to GitHub** in Source Control
2. Choose repository name
3. Select Public or Private
4. Click **Publish**

### Step 3: Enable GitHub Pages

Follow Step 4 from Method 1 above.

## Updating Your Portfolio

After making changes:

```powershell
git add .
git commit -m "Update portfolio"
git push
```

Changes will be live in 1-2 minutes.

## Custom Domain Setup (Optional)

### Free Domain Options

1. **Freenom** (free .tk, .ml, .ga, .cf, .gq domains)
   - Go to [freenom.com](https://www.freenom.com/)
   - Search for available domain
   - Register (requires account)

2. **is.gd** (free URL shortener)
   - Not a true custom domain but provides short URL

3. **DuckDNS** (free subdomain)
   - Go to [duckdns.org](https://www.duckdns.org/)
   - Get free subdomain

### Configure Custom Domain

1. In your GitHub repository:
   - Settings → Pages
   - Under **Custom domain**, enter: `yourdomain.com`
   - Click **Save**

2. With your domain provider, add DNS records:

**For apex domain (yourdomain.com):**
```
Type: A
Host: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Host: www
Value: YOUR_USERNAME.github.io
```

3. Wait 24-48 hours for DNS propagation

4. Enable **Enforce HTTPS** in GitHub Pages settings

## Verification

### Check if Site is Live

Visit your GitHub Pages URL:
- `https://YOUR_USERNAME.github.io/REPO_NAME/`

### Troubleshooting

**404 Error:**
- Make sure `index.html` is in root folder
- Check GitHub Pages is enabled
- Wait a few more minutes

**CSS/JS Not Loading:**
- Check file paths are relative (not absolute)
- Ensure files are committed and pushed
- Clear browser cache (Ctrl+Shift+R)

**Images Not Showing:**
- Verify image files are in `assets/` folder
- Check file names match exactly (case-sensitive)
- Ensure images are committed and pushed

**Changes Not Showing:**
- Clear browser cache
- Wait 1-2 minutes for GitHub to rebuild
- Check commit was pushed successfully

## GitHub Pages Limits

- Repository size: Max 1 GB
- Site size: Max 1 GB
- Bandwidth: 100 GB/month soft limit
- Builds: 10 per hour

## Free Alternatives to GitHub Pages

- **Netlify** - Drag & drop deployment
- **Vercel** - Automatic deployments
- **Cloudflare Pages** - Fast global CDN
- **Surge.sh** - Simple CLI deployment
- **GitLab Pages** - Similar to GitHub Pages

## Security Best Practices

1. Don't commit sensitive information
2. Enable HTTPS (automatic with GitHub Pages)
3. Use environment variables for API keys
4. Keep dependencies updated
5. Add `.gitignore` for sensitive files

## Performance Optimization

Before deploying:

1. **Optimize images:**
   - Use [TinyPNG](https://tinypng.com/)
   - Convert to WebP format
   - Resize to appropriate dimensions

2. **Minify CSS/JS** (optional):
   - Use [CSS Minifier](https://cssminifier.com/)
   - Use [JavaScript Minifier](https://javascript-minifier.com/)

3. **Test performance:**
   - Run [Lighthouse](https://developers.google.com/web/tools/lighthouse) audit
   - Check mobile responsiveness
   - Test on slow 3G connection

## Monitoring

### Check Analytics (Optional)

Add Google Analytics:

```html
<!-- Add before </head> in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Monitor Uptime

Free uptime monitoring:
- [UptimeRobot](https://uptimerobot.com/)
- [StatusCake](https://www.statuscake.com/)

## Next Steps

1. ✅ Deploy to GitHub Pages
2. ✅ Test on multiple devices
3. ✅ Share link on LinkedIn
4. ✅ Add to email signature
5. ✅ Update regularly with new projects

## Questions?

If you encounter issues:
1. Check [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Search [Stack Overflow](https://stackoverflow.com/)
3. Check [GitHub Community](https://github.community/)

---

**Good luck with your deployment! 🚀**
