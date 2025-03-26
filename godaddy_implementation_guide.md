# CB Swartz Art Website Implementation Guide for GoDaddy

## Overview
This guide provides detailed instructions for implementing the improved website files using GoDaddy's File Manager. The improvements include a modernized design, mobile responsiveness, SEO optimization, and image optimization.

## Before You Begin

### Required Files
- `deployment_package.zip` - Contains all the improved website files
- This implementation guide

### Preparation
1. Set aside 30-45 minutes for the implementation process
2. Implement during a low-traffic period if possible
3. Have your GoDaddy login credentials ready

## Step-by-Step Implementation Instructions

### Step 1: Access GoDaddy File Manager
1. Log in to your GoDaddy account at https://sso.godaddy.com
2. Navigate to "My Products" and locate your hosting package
3. Click "Manage" next to your hosting plan
4. In the hosting dashboard, find and click on "File Manager" (usually under the "Files & FTP" section)

### Step 2: Create a Backup of Your Current Website
1. In File Manager, navigate to your website's root directory (often public_html or www)
2. Select all files and folders by checking the box at the top of the file list
3. Click the "Download" button in the top menu
4. Save the downloaded zip file to your computer as a backup
5. Label it clearly with the date (e.g., "cbswartzart_backup_Mar21_2025.zip")

### Step 3: Upload the Deployment Package
1. In File Manager, ensure you're in the root directory of your website
2. Click the "Upload" button in the top menu
3. Select the `deployment_package.zip` file from your computer
4. Wait for the upload to complete (this may take a few minutes depending on your internet connection)

### Step 4: Extract the Deployment Package
1. Once uploaded, locate the `deployment_package.zip` file in your File Manager
2. Select the zip file by checking the box next to it
3. Click "Extract" in the top menu
4. In the extraction dialog, ensure the destination is set to your website's root directory
5. Click "Extract File(s)" to proceed
6. Wait for the extraction to complete

### Step 5: Move Files to Correct Locations
1. After extraction, you'll see a new folder called "deployment_package"
2. Navigate into this folder by clicking on it
3. Select all files and folders inside by checking the box at the top of the file list
4. Click "Move" in the top menu
5. In the move dialog, set the destination to your website's root directory
6. Click "Move Files" to proceed
7. If prompted about overwriting existing files, click "Yes" or "Overwrite"

### Step 6: Verify Directory Structure
Ensure your website's root directory now contains:
- HTML files (index.html, gallery.html, custom-pricing.html, contact.html, about.html)
- css folder (containing all CSS files)
- js folder (containing all JavaScript files)
- sitemap.xml
- robots.txt
- .htaccess

### Step 7: Clean Up
1. Navigate back to your website's root directory
2. Locate the empty "deployment_package" folder and the "deployment_package.zip" file
3. Select both by checking the boxes next to them
4. Click "Delete" in the top menu
5. Confirm the deletion when prompted

### Step 8: Test Your Website
1. Open a new browser tab and visit your website (https://cbswartzart.com)
2. Check that the homepage loads correctly with the new design
3. Test navigation to ensure all links work properly
4. View the site on a mobile device or use browser developer tools to test mobile responsiveness
5. Check that images load properly and the site functions as expected

## Troubleshooting

### If the homepage doesn't display correctly:
1. Return to File Manager
2. Navigate to your website's root directory
3. Check that index.html exists and has been updated
4. If needed, right-click on index.html and select "Edit" to view/edit the file content

### If CSS styles are missing:
1. Verify that the "css" folder exists in your root directory
2. Check that all CSS files are present in the css folder
3. Ensure file permissions are set correctly (usually 644 for files)

### If JavaScript functionality isn't working:
1. Verify that the "js" folder exists in your root directory
2. Check that all JavaScript files are present in the js folder
3. Check your browser's developer console for any JavaScript errors

### If images aren't displaying:
1. Ensure all image paths in the HTML files are correct
2. Check that image files exist in the specified locations
3. Verify image file permissions (usually 644)

## Additional Notes

### File Permissions
- HTML, CSS, JavaScript, and image files should have 644 permissions
- Folders should have 755 permissions
- If you encounter permission issues, you can change permissions in File Manager by:
  1. Selecting the file or folder
  2. Clicking "Permissions" in the top menu
  3. Setting the appropriate permission value

### Caching
- Your website may be cached in your browser or by GoDaddy
- To see changes immediately, try:
  1. Clearing your browser cache
  2. Using incognito/private browsing mode
  3. If available, purging the server cache in your GoDaddy hosting dashboard

### Reverting Changes
If you need to revert to your previous website:
1. Delete all the new files
2. Upload and extract your backup zip file

## Support
If you encounter any issues during implementation, please reach out for assistance.
