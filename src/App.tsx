import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import AuthorCoaching from "./pages/AuthorCoaching"
import CreativeCoaching from "./pages/CreativeCoaching"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/author-coaching" element={<AuthorCoaching />} />
          <Route path="/creative-coaching" element={<CreativeCoaching />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App