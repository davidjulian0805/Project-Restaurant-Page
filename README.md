
# Restaurant Page

This project is a **restaurant website** built using **JavaScript modules and Webpack** as part of **The Odin Project JavaScript Course**. The goal is to practice organizing code into modules and dynamically rendering content using JavaScript.

---

## Project Overview

The website simulates a restaurant page with **tabbed navigation**, allowing users to switch between different sections such as:

* Home
* Menu
* Contact

All content is dynamically generated using **JavaScript**, creating a single-page application experience.

---

## Features

* Tabbed navigation using **buttons**
* Dynamic page rendering using JavaScript
* Separate modules for each page (Home, Menu, Contact)
* Organized project structure
* Bundled using **Webpack**
* Uses external styles and images

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6 Modules)
* Webpack
* Git
* GitHub

---

## Project Structure

```id="bdh7yo"
restaurant-page
│
├── dist
├── src
│   ├── index.js
│   ├── home.js
│   ├── menu.js
│   ├── contact.js
│   ├── styles.css
│   ├── template.html
│   │
│   └── Images
│       ├── bf.jpg
│       ├── kai.jpg
│       ├── darren.jpg
│       ├── Siopao.png
│       ├── chaofan.jpg
│       └── halo.png
│
├── .gitignore
├── package.json
└── README.md
```

---

## How It Works

1. Webpack bundles all files into the `dist` folder.
2. `index.js` controls:

   * Initial page load
   * Tab switching logic
3. Each page is handled by its own module.
4. Clicking a navigation button:

   * Clears existing content
   * Loads new content dynamically

---

## Live Demo

```id="z3q2g4"
https://davidjulian0805.github.io/Project-Restaurant-Page/
```

---

## How to Run the Project

1. Clone the repository:

```bash id="ybohl2"
git clone https://github.com/davidjulian0805/Project-Restaurant-Page.git
```

2. Install dependencies:

```bash id="3t6jz0"
npm install
```

3. Run development server:

```bash id="g4d84c"
npx webpack serve
```

4. Open:

```id="g9j4sx"
http://localhost:8080
```

---

## Deployment (GitHub Pages)

```bash id="q5e7em"
git branch gh-pages
git checkout gh-pages && git merge main --no-edit
npx webpack
git add dist -f
git commit -m "deploy"
git push origin gh-pages
```

---

## Future Improvements

* Improve UI design
* Add animations
* Make responsive
* Expand menu content

---

## Acknowledgements

Project provided by:

**The Odin Project**
[https://www.theodinproject.com](https://www.theodinproject.com)


