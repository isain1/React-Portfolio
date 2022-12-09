import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <h1>Isain Ibarra</h1>
            <ul>
                <CustomLink to="/">About Me</CustomLink>
                <CustomLink to="/portfolio">Portfolio</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
                <CustomLink to="/resume">Resume</CustomLink>
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