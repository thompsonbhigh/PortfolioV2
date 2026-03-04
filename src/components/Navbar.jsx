import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header>
        <NavLink to="/">
            <p>·home</p>
        </NavLink>
        <nav>
            <NavLink to="/about">
                <p>·about</p>
            </NavLink>
            <NavLink to="/projects">
                <p>·projects</p>
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar