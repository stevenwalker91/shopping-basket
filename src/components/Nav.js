
import { NavLink } from  'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul className="nav-list">
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/shop"><li>Shop</li></NavLink>
      </ul>
    </nav>
  )
}

export default Nav;