import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="logo-img"
    />
    <ul className="header">
      <Link to="/home">
        <li className="home">Home</li>
      </Link>
      <Link to="/products">
        <li className="home">Products</li>
      </Link>
      <Link to="/cart">
        <li>Cart</li>
      </Link>
      <button className="button2" type="button">
        Logout
      </button>
    </ul>
  </div>
)
export default Header
