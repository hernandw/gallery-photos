import { NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <nav className="bg-success p-4 d-flex justify-content-center gap-4">
      <NavLink to="/" className="text-light text-decoration-none">
        Home
      </NavLink>
      <NavLink to="/favourites" className="text-light text-decoration-none">
        Favourites
      </NavLink>
    </nav>
  );
}

export default NavBar
