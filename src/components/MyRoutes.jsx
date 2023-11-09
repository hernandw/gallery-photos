import { Route, Routes } from "react-router-dom"
import Favourites from "../pages/Favourites"
import Home from "../pages/Home"


const MyRoutes = () => {
  return (
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
    </Routes>
  )
}

export default MyRoutes
