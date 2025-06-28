# 🎬 MovieApp

A React-based movie listing app with light/dark mode, routing, filtering, and dynamic movie adding functionality.

---

## ✨ Features

- 🌗 Toggle between **Light Mode** and **Dark Mode**
- 🔍 Filter movies by **title** and **rating**
- ➕ Add new movies with poster, genre, year, and rating
- 🧭 Navigate to **detailed movie pages** using React Router
- 🎴 Responsive UI styled with **Tailwind CSS**

---

## 📁 Folder Structure

```
MovieApp/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   └── components/
│       ├── MovieCard.js
│       ├── MovieList.js
│       ├── Filter.js
│       └── MovieDetail.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
```

---

## 🚀 Getting Started

1. **Install dependencies**

```
npm install
```

2. **Start the app**

```
npm start
```

3. The app will run at [http://localhost:3000](http://localhost:3000)

---

## 📦 Additional Setup

If not already installed, make sure to add:

```
npm install react-router-dom tailwindcss postcss autoprefixer
```

Then run:

```
npx tailwindcss init -p
```

Make sure your `tailwind.config.js` includes:
```js
darkMode: 'class',
```

And your `index.css` includes:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```


## 🛠 Built With

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)

