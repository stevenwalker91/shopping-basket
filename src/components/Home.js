
import { NavLink } from  'react-router-dom';

const Home = () => {
  return (

    <div className="hero-banner">
      <div className="home-banner">
        <h1>Welcome to the store!</h1>
        <button><NavLink to="/shop">Shop Now!</NavLink></button>

      </div>
    </div>


  )
}

export default Home;