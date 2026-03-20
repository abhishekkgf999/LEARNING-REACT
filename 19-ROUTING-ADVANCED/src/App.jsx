import React from 'react'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Footer from './components/Footer'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'

/*
# 1️⃣ Concept: What is Advanced Routing?

Advanced routing = handling real-world navigation scenarios.

Instead of simple pages like:

/home → Home
/about → About

We now deal with:

* Dynamic URLs (/user/101)
* Nested pages (/dashboard/profile)
* Protected routes (login required 🔐)
* Navigation via code

---

# 2️⃣ The "Why": What problem does it solve?

Real apps need:

* User profiles
* Dashboards with sub-pages
* Authentication
* Conditional navigation

Basic routing is not enough.

So React Router gives tools to handle:


Dynamic data + structured UI + control flow

---

# 3️⃣ 🧪 Feature 1: Dynamic Routes (URL Params)

## 👉 Concept

URL can contain variables:

/user/101
/user/202

---

## 🧪 Code

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  return <h1>User ID: {id}</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

---

## 💡 Why useful?

Same component → different data

---

# 4️⃣ 🧪 Feature 2: Nested Routes

## 👉 Concept

Pages inside pages.

Example:

/dashboard
   ├── /profile
   └── /settings

---

## 🧪 Code

import { Routes, Route, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}

function Profile() {
  return <h2>Profile</h2>;
}

function Settings() {
  return <h2>Settings</h2>;
}

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

---

## 💡 Key Idea

Outlet = place where child routes render

---

# 5️⃣ 🧪 Feature 3: Programmatic Navigation

## 👉 Concept

Navigate using code (not clicking links)

---

## 🧪 Code

import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // login logic
    navigate("/dashboard");
  };

  return <button onClick={handleLogin}>Login</button>;
}

---

## 💡 Why useful?

* After login
* After form submit
* Redirects

---

# 6️⃣ 🧪 Feature 4: Protected Routes 🔐

## 👉 Concept

Restrict access to certain pages.

---

## 🧪 Code

function ProtectedRoute({ children }) {
  const isLoggedIn = false; // example

  if (!isLoggedIn) {
    return <h1>Access Denied</h1>;
  }

  return children;
}

Usage:

<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

---

## 💡 Real Use

Only logged-in users → dashboard

---

# 🧱 Mental Model

Basic Routing → Page switching
Advanced Routing → App control system

---

# 🔗 Everything Connected

| Feature        | Purpose     |
| -------------- | ----------- |
| useParams      | dynamic URL |
| Outlet         | nested UI   |
| useNavigate    | redirect    |
| ProtectedRoute | security    |

*/
const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <Navbar2/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/:courseId' element={<CourseDetail/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path='men' element={<Men/>}/>
          <Route path='women' element={<Women/>}/>
          <Route path='kids' element={<Kids/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
