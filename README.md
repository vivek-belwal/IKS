# Indian Knowledge Systems (IKS) | Exploring Ancient Wisdom

![IKS Platform](https://img.shields.io/badge/Status-Active-brightgreen)
![Bilingual Support](https://img.shields.io/badge/Language-English%20%7C%20Hindi-blue)

A comprehensive, beautifully designed web portal dedicated to exploring the profound depths of the Indian Knowledge Systems (IKS). This platform serves as a vast repository of scientific, philosophical, and artistic heritage, covering everything from the ancient Vedas to the great Epics.

## 🌟 Key Features

*   **Bilingual Interface (English & Hindi):** Fully localized content with a custom-built JavaScript translation engine allowing seamless toggling between languages without page reloads.
*   **Rich Content Modules:** 
    *   **The Vedas:** Detailed sections on Rigveda, Samaveda, Yajurveda, and Atharvaveda.
    *   **The Epics:** Deep-dive pages for the Ramayana and Mahabharata, featuring chapter-by-chapter (Kanda/Parva) breakdowns.
    *   **Pillars of Knowledge:** Comprehensive overviews of Ayurveda, Yoga, Mathematics & Astronomy, and Temple Architecture.
*   **Modern UI/UX:** Responsive design, smooth reveal animations, and a sleek dark/light mode toggle for optimal reading comfort.
*   **Custom Artwork:** Features unique, AI-generated mythic portraits and epic scenes integrated beautifully with `.portrait-img` styling.

## 🛠️ Technology Stack

*   **Frontend:** HTML5, CSS3
*   **Logic & Interactivity:** Vanilla JavaScript
*   **Localization:** ID-based dynamic DOM manipulation using individual `*_translations.js` mapping files.

## 📂 Project Structure

```text
/
├── index.html                   # Home page & main navigation hub
├── epics.html                   # Gateway to Ramayana & Mahabharata
├── ramayana.html                # Detailed Ramayana breakdown
├── mahabharata.html             # Detailed Mahabharata breakdown
├── rigveda.html, etc.           # Veda detail pages
├── ayurveda.html, etc.          # Pillar detail pages
├── styles.css                   # Global styles, variables, and themes
├── script.js                    # Core logic (theme toggle, lang toggle, animations)
├── *_translations.js            # Language mapping files for each specific page
└── *.png                        # Custom generated mythic artworks
```

## 🚀 Getting Started

To run this project locally, simply clone the repository and open `index.html` in your preferred web browser. No build steps or local servers are required!

```bash
git clone https://github.com/yourusername/IKS-Platform.git
cd IKS-Platform
# Open index.html in your browser
```

## 🌐 Localization System

The platform uses a scalable, bespoke translation system. Every paragraph and heading has a unique `id`. The `toggleLang()` function in `script.js` iterates through the DOM, matching IDs to the global `window.IKS_TRANSLATIONS` object (loaded via the specific page's `_translations.js` file) to dynamically update the text.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page. If you are adding new content, ensure that every new `<p>` or `<h>` tag receives a unique ID and is added to the corresponding `_translations.js` file to maintain bilingual support.

## 📜 License

This project is created to celebrate and share ancient heritage. All rights reserved.

## 👤Created by
Vivek Belwal
