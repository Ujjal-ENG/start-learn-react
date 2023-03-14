import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className="flex justify-center items-center gap-6 text-4xl bg-black text-white p-4">
                    <NavLink to="/" className="focus:text-red-600">
                        Home
                    </NavLink>
                    <NavLink to="/blog" className="focus:text-red-600">
                        Blog
                    </NavLink>
                    <NavLink to="/contact" className="focus:text-red-600">
                        Contact
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
