# Gallery Website - GitHub Pages Deployment Guide

A modern, responsive gallery website with light/dark mode, image lightbox, and video support.

## Features

✅ **Homepage** with hero section and call-to-action button  
✅ **Gallery page** with tabbed navigation (Images/Videos)  
✅ **Lightbox** for images with previous/next navigation  
✅ **Light/Dark mode** toggle with persistent preference  
✅ **Mobile-friendly** responsive design  
✅ **Keyboard navigation** (Arrow keys, Escape) in lightbox

## 📁 Project Structure

```
my-gallery-site/
├── index.html          # Homepage
├── gallery.html        # Gallery page with tabs
├── css/
│   └── style.css      # All styles with theme variables
├── js/
│   └── script.js      # Theme toggle, tabs, lightbox logic
└── images/            # Your image files go here
```

## 🚀 Deploy to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon (top right) → **New repository**
3. Name it `my-gallery-site` (or any name you prefer)
4. Choose **Public**
5. Click **Create repository**

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface** (Easiest)

1. In your new repository, click **uploading an existing file**
2. Drag and drop ALL files and folders from `my-gallery-site/`
3. Click **Commit changes**

**Option B: Using Git Command Line**

```bash
# Navigate to your project folder
cd my-gallery-site

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add your GitHub repository as remote (replace USERNAME and REPO)
git remote add origin https://github.com/USERNAME/REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. In your repository, go to **Settings**
2. Click **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Choose **main** branch and **/ (root)** folder
5. Click **Save**
6. Wait 1-2 minutes for deployment

### Step 4: Access Your Website

Your site will be live at:
```
https://USERNAME.github.io/REPO-NAME/
```

Example: `https://johndoe.github.io/my-gallery-site/`

## 🖼️ Adding Your Own Images

### Method 1: Upload to GitHub

1. Create images in the `images/` folder
2. In `gallery.html`, replace the sample image URLs:

```html
<!-- Replace this: -->
<div class="gallery-item" data-src="https://picsum.photos/800/600?random=1">
    <img src="https://picsum.photos/400/300?random=1" alt="Image 1">
</div>

<!-- With this: -->
<div class="gallery-item" data-src="images/my-photo.jpg">
    <img src="images/my-photo.jpg" alt="My Photo">
</div>
```

### Method 2: Use External Image Hosting

Upload images to:
- [Imgur](https://imgur.com)
- [Cloudinary](https://cloudinary.com)
- [imgbb](https://imgbb.com)

Then use the direct image URLs in your HTML.

## 🎥 Adding Videos

Replace the sample videos in `gallery.html`:

```html
<div class="video-item">
    <video controls>
        <source src="videos/my-video.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</div>
```

Or use embedded YouTube videos:

```html
<div class="video-item">
    <iframe width="100%" height="315" 
            src="https://www.youtube.com/embed/VIDEO_ID" 
            frameborder="0" allowfullscreen>
    </iframe>
</div>
```

## 🎨 Customization

### Change Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --accent: #4a90e2;        /* Primary color */
    --accent-hover: #357abd;  /* Hover color */
}
```

### Change Text

- Edit `index.html` for homepage text
- Edit `gallery.html` for gallery text

### Add More Gallery Items

Copy and paste gallery item blocks in `gallery.html`:

```html
<div class="gallery-item" data-src="path/to/full-size.jpg">
    <img src="path/to/thumbnail.jpg" alt="Description">
</div>
```

## 🔧 Testing Locally

To test on your computer before deploying:

1. Open `index.html` in a web browser
2. Or use a local server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (with npx)
npx serve
```

Then visit `http://localhost:8000`

## 📱 Mobile Features

- Responsive grid layout
- Touch-friendly lightbox navigation
- Optimized image sizes for mobile
- Accessible navigation

## ⌨️ Keyboard Shortcuts

When lightbox is open:
- **Arrow Left/Right** - Navigate between images
- **Escape** - Close lightbox

## 🐛 Troubleshooting

**Images not showing?**
- Check file paths are correct
- Ensure images are in the `images/` folder
- Check file extensions match (`.jpg`, `.png`, etc.)

**Website not updating?**
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait a few minutes for GitHub Pages to rebuild
- Check GitHub Actions tab for deployment status

**Theme not persisting?**
- Make sure JavaScript is enabled
- Check browser console for errors (F12)

## 📝 License

Free to use and modify for personal and commercial projects.

## 🎯 Next Steps

- Replace sample images with your own
- Customize colors and text
- Add more pages if needed
- Consider adding a contact form
- Set up a custom domain

Enjoy your new gallery website! 🎉
