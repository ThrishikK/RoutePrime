import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="main-container-h">
    <Link to="/range/0" className="link-style-h">
      <h1>1-250</h1>
    </Link>
    <Link to="/range/1" className="link-style-h">
      <h1>251-500</h1>
    </Link>
    <Link to="/range/2" className="link-style-h">
      <h1>501-750</h1>
    </Link>
    <Link to="/range/3" className="link-style-h">
      <h1>751-1000</h1>
    </Link>
  </div>
)

export default Header
