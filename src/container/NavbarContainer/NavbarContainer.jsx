import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";

const NavbarContainer = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Navbar
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
        />
    );
}

export default NavbarContainer;