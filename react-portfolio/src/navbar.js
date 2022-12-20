import { Link, useMatch, useResolvedPath } from "react-router-dom";
import './App.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <h1>Isain Ibarra</h1>
            <ul className="navlist">
                <li className="listitem">
                    <CustomLink to="/" className="navDir">About Me</CustomLink>
                </li>
                <li>
                    <CustomLink to="/portfolio" className="navDir">Portfolio</CustomLink>
                </li>    
                <li>
                    <CustomLink to="/contact" className="navDir">Contact</CustomLink>
                </li>
                <li>
                    <CustomLink to="/resume" className="navDir">Resume</CustomLink>
                </li>
            </ul>
        </div>
    );
};

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}> {children} </Link>
        </li>
    );
};