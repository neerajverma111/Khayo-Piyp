import { BrowserRouter, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"

const Route = () => {
  return (
    <div>
       <BrowserRouter>
      <Routes>
      <Route index element={<Home />} />
        <Route path='/about' element={<About />} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Route
