<div align="center">

# 🚀 Anuj Kumar — Portfolio Website

### Python Developer | AI/ML Engineer

A modern, fully responsive portfolio built with **Flask**, showcasing projects, skills, education, and experience through a sleek dark-themed interface with smooth animations and glowing accents.

[![Python](https://img.shields.io/badge/Python-3.8+-3776AB?style=flat&logo=python&logoColor=white)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-Backend-000000?style=flat&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-lightgrey?style=flat)](#-license)

[Live Demo](#) · [Report Bug](#-contact) · [Request Feature](#-contact)

</div>

---

## 📖 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Sections Overview](#-sections-overview)
- [Featured Projects](#-featured-projects)
- [Responsive Design](#-responsive-design)
- [Roadmap](#-roadmap)
- [Contact](#-contact)
- [License](#-license)

---

## 📌 About

This repository contains the source code for my personal portfolio — a single-page web application built with **Flask** on the backend and **vanilla HTML/CSS/JS** on the frontend. It's designed to present my work as a Python Developer and AI/ML Engineer in a clean, professional, and visually engaging way, with zero frontend frameworks or build tooling required.

---

## ✨ Features

- 🎨 **Modern dark UI** — glassmorphism-style cards, gradient glows, and a cohesive blue/gold accent palette
- 📱 **Fully responsive** — unified `auto-fit` CSS Grid layout adapts every card section (Skills, Projects, Experience, Education, Contact) smoothly from desktop down to small phones
- 🎬 **Scroll animations** — sections fade/slide into view as the user scrolls
- 🍔 **Mobile navigation** — animated hamburger menu with smooth open/close transitions
- ⬆️ **Back-to-top button** — appears after scrolling, smooth-scrolls back to the hero section
- 📄 **One-click resume download** — serves a PDF resume directly from Flask static files
- 🔍 **SEO-optimized** — proper meta tags, Open Graph, and Twitter Card support for rich link previews on LinkedIn/WhatsApp/social platforms
- ♿ **Accessibility-conscious** — visible focus states, semantic HTML, and `prefers-reduced-motion` support
- 🖼️ **Favicon & branding** — consistent identity across browser tab and social shares

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Backend** | Python, Flask (Jinja2 templating) |
| **Frontend** | HTML5, CSS3 (Grid & Flexbox, no frameworks) |
| **Interactivity** | Vanilla JavaScript |
| **Fonts** | [Sora](https://fonts.google.com/specimen/Sora) (headings) + [Inter](https://fonts.google.com/specimen/Inter) (body) via Google Fonts |
| **Icons** | Font Awesome 6, Devicon |
| **Deployment** | _(e.g. Render / Railway / PythonAnywhere — update with your host)_ |

---

## 📁 Project Structure

```
portfolio/
│
├── app.py                     # Flask application entry point & routes
├── requirements.txt           # Python dependencies
│
├── static/
│   ├── css/
│   │   └── style.css          # Main stylesheet (responsive grid system, theming)
│   ├── js/
│   │   └── script.js          # Nav toggle, scroll reveal, back-to-top logic
│   ├── images/
│   │   └── anujkumar.jpeg     # Profile photo / favicon source
│   └── resume/
│       └── AnujKumar.pdf      # Downloadable resume
│
└── templates/
    └── index.html             # Single-page site template
```

---

## 🚀 Getting Started

### Prerequisites
- Python 3.8+
- pip (Python package manager)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/AnujKumar0109/portfolio.git
cd portfolio

# 2. (Optional but recommended) Create a virtual environment
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate

# 3. Install dependencies
pip install -r requirements.txt
# or, if there's no requirements.txt yet:
pip install flask

# 4. Run the app
python app.py
```

Then open your browser and go to:

```
http://127.0.0.1:5000
```

### Suggested `requirements.txt`

```
Flask>=2.3
```

---

## 📄 Sections Overview

| Section | Description |
|---|---|
| **Home** | Hero intro, role tagline, and resume download CTA |
| **About** | Short bio with profile photo |
| **Skills** | Programming languages, frameworks, databases, and tools — grouped by category with responsive card grid |
| **Education** | Academic history with institution, years, and CGPA/percentage |
| **Projects** | Highlighted builds with tech-stack tags and GitHub/live demo links |
| **Experience** | Internship/work history with responsibilities and technologies used |
| **Contact** | Email, phone, LinkedIn, and GitHub — presented as interactive cards |

---

## 💼 Featured Projects

| Project | Description | Stack |
|---|---|---|
| **Voice Campus Helpdesk** | AI-powered voice assistant answering campus queries via Speech Recognition & TTS | Python, Flask, MySQL, JavaScript |
| **Movie Recommendation System** | Content-based recommender using the TMDB API | Python, Streamlit, Pandas, Scikit-learn |
| **AI Resume Analyzer** | NLP-driven resume screening with ATS-style scoring | Python, Flask, NLP, Machine Learning |

---

## 📱 Responsive Design

All card-based sections (Skills, Projects, Experience, Education, Contact) share a single unified responsive rule:

```css
grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
```

This lets the grid automatically adjust the number of columns based on available screen width — no manual breakpoint overrides needed — ensuring a consistent card layout experience from large desktops down to small mobile screens.

---

## 🗺️ Roadmap

- [ ] Add dark/light theme toggle
- [ ] Add a blog section for AI/ML write-ups
- [ ] Integrate a contact form with email backend (Flask-Mail)
- [ ] Add project filtering by tech stack
- [ ] Deploy with CI/CD pipeline

---

## 📬 Contact

**Anuj Kumar**

- 📧 Email: [anujkumarr0109@gmail.com](mailto:anujkumarr0109@gmail.com)
- 📱 Phone: +91 78765 88438
- 💼 LinkedIn: [anuj-kumar](https://www.linkedin.com/in/anuj-kumar-757725359)
- 💻 GitHub: [@AnujKumar0109](https://github.com/AnujKumar0109)

---

## 📜 License

© 2025 Anuj Kumar. All rights reserved.

<div align="center">

**⭐ If you like this portfolio, consider giving the repo a star!**

</div>
