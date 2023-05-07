import { Link } from "react-router-dom"
export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="site-name">ReactApp</Link>
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/details">Details</Link>
            </li>
        </ul>
    </nav>

}