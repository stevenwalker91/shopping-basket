
import { NavLink } from  'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/shop">Shop</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav;