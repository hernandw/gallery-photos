import { NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <nav className="bg-success p-4 d-flex justify-content-center gap-4">
      <NavLink to="/" className="text-light text-decoration-none">
        Home 
      </NavLink>
      <NavLink to="/favourites" className="text-light text-decoration-none">
        Favoritos
      </NavLink>
    </nav>
  );
}

export default NavBar
