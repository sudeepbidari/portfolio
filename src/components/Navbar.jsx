import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const pathname = useLocation();

    const linkStyle = (path) => {
        return `px-3 py-2 rounded-md ${
            pathname === path
                ? "bg-blue-600 text-white"
                : "text-blue-600 hover:bg-blue-100"
        }`;
    };

    return (
        <header className="bg-white shadow sticky top-0 z-50">
            <nav className="max-w 5xl mx-auto flex justify-between items-center p-4">
                <Link to="/" className={linkStyle("/")}>
                <h1 className="text-xl font-bold text-blue-700">Sudeep Bidari</h1>
                </Link>
                <div className="space-x-2">
                    <Link to="/projects" className={linkStyle("/projects")}>Projects</Link>
                    <Link to="/about" className={linkStyle("/about")}>About</Link>
                    <Link to="/contact" className={linkStyle("/contact")}>Contact</Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;