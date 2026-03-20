import React from 'react'
import {Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Navbar from './components/Navbar'

/*
# 1️⃣ Concept: What is React Router DOM?

React Router DOM lets you navigate between different pages in a React app without reloading the browser.

Normally in websites:- Click link → Page reloads → New HTML loads

In React:- Click link → URL changes → Component changes (NO reload)

So:- React Router = controls which component to show based on URL

---

# 2️⃣ The "Why": What problem does it solve?

React apps are Single Page Applications (SPA).

That means:

* Only one HTML file
* No full page reloads

Without React Router:

❌ You can't create real navigation like:

* /home
* /about
* /profile

With React Router:

✅ You can map URLs to components:

/home → Home component
/about → About component

---

# 3️⃣ Code Sandbox (Minimal Setup)

### Step 1: Install

npm install react-router-dom

---

### Step 2: Basic Routing

import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


---

# 4️⃣ Breaking It Down

### 🧱 1. BrowserRouter

<BrowserRouter>

* Wraps your app
* Enables routing

---

### 🧱 2. Routes

<Routes>

* Container for all routes

---

### 🧱 3. Route

<Route path="/about" element={<About />} />

* path → URL
* element → which component to show

---

# 5️⃣ Navigation (Very Important 🔥)

Instead of <a> tag ❌

Use:

import { Link } from "react-router-dom";

<Link to="/about">Go to About</Link>

Why?

<a> → reloads page ❌
<Link> → no reload ✅

---

# 🧱 Lego Analogy

Think of your app like a hotel 🏨

* URL = room number
* React Router = receptionist
* Component = room


Go to /about → receptionist sends you to About room

---

# ⚠️ Important Insight

React Router does NOT load new HTML pages.

It just:

Changes URL
   ↓
Switches components

That’s why it's fast.

*/

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/contact' element = {<Contact/>} />
        <Route path='/product' element = {<Product/>} />
      </Routes>      
    </div>
  )
}

export default App
