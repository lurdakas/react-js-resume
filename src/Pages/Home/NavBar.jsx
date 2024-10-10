import{ useState, useEffect } from "react" 
import {Link} from "react-scroll"

function Navbar() {
    const [navActive, setNavActive] = useState(false);
    const toggleNav = () => { setNavActive(!navActive) }
    const closeMenu = () => { setNavActive(false) }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) { closeMenu }
        };

        window.addEventlistener("resize", handleResize);

        return () => { window.removeEventListener("resize", handleResize) };
    }, []);
    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu;
        }
    }, []);
    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                <img src="./img/Resume.jpg" alt="Logoipsum" />
            </div>
        </nav>
    );
}

export default Navbar;