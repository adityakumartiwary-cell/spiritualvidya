# SpiritualVidya – Static Spiritual Learning Website

This is a responsive, static website designed to serve as a comprehensive platform for spiritual videos, sacred texts, and educational courses from India and around the world. Built with pure HTML, CSS, and JavaScript, it offers an engaging and accessible experience for learners and seekers.

## File Overview
| File             | Purpose                                              |
|------------------|------------------------------------------------------|
| `index.html`     | Main webpage structure and content                  |
| `styles.css`     | Styling and layout                                  |
| `script.js`      | Interactive features (menu toggle, filters)        |
| `README.md`      | Documentation and setup instructions                 |

## Features
- **Spiritual Video Library**: Categorized videos on meditation, yoga, philosophy, and more.
- **Sacred Texts & Books**: Downloadable PDFs of holy scriptures and learning materials.
- **Educational Courses**: Structured programs for meditation, Vedic studies, and more.
- **Responsive Design**: Looks great on desktops, tablets, and mobiles.
- **Modern Aesthetics**: Clean, calming color palette with smooth animations.
- **Easy Customization**: Modify or extend content as needed.

## How to Use
### Setting Up Locally
1. Save the four files (`index.html`, `styles.css`, `script.js`, `README.md`) into a folder, e.g., `SpiritualVidya`.
2. Open `index.html` directly in a web browser to view your site locally.
3. To view via a local server (recommended):
   - Run `python -m http.server 8000` in the folder (requires Python).
   - Open `http://localhost:8000` in your browser.

### Publishing Your Site
- **Using GitHub Pages**:
  1. Create a public GitHub repository named `spiritualvidya`.
  2. Push all four files to the root of the main branch.
  3. Enable GitHub Pages in repository settings → Pages → Source: main / root.
  4. Access your live site at `https://yourusername.github.io/spiritualvidya`.

- **Using Netlify or Vercel**:
  1. Upload the entire folder via drag-and-drop.
  2. Obtain your live URL and optional custom domain.

## Customization Tips
- **Add or modify videos**:
  - Duplicate and edit `<div class="video-item ...">` blocks.
  - Change YouTube links to feature your preferred content.
- **Upload new books**:
  - Add `<div class="book-card">` blocks in the Books section.
  - Update PDF URLs accordingly.
- **Change branding**:
  - Adjust colors in `styles.css`.
  - Update logo text in `index.html`.
- **Expand courses**:
  - Duplicate course cards and modify text as needed.

## Important Notes
- **File Naming**: Ensure the main file is named `index.html` for hosting platforms.
- **Content Paths**: Keep linked files and assets in the same folder or update relative paths.
- **Accessibility**: The site uses semantic HTML, alt texts, and good contrast for usability.
- **Performance**: Uses lazy-loading for videos and images.

## Support & Future Expansion
- Add user authentication for personalized learning.
- Integrate live streaming or scheduled events.
- Embed a search feature for videos and books.
- Connect with a Content Management System for easy updates.

## Contact & Feedback
Feel free to fork, customize, and expand this project. Reach out if you need help with deployment or enhancements!

**May this platform inspire spiritual growth and share divine wisdom with the world!** 🕉️

