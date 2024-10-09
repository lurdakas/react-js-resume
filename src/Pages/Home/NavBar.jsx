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
    });
}