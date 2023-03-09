import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useNav } from "../../../../data/hooks/useNav";

const NavBar = () => {
    const [nav, setNav] = useState(useNav());

    const handleSelect = (navIndex) => {
        const newNav = [...nav];

        if (!newNav[navIndex].isSelected) {
            newNav.map((item, index) => {
                if (item.isSelected && index !== navIndex) {
                    item.isSelected = false;
                }

                if (index === navIndex && item.isSelected === false) {
                    item.isSelected = true;
                }
            });
        }

        setNav(newNav);
    };

    return (
        <>
            <div className="container-view overflow-hidden bg-bg-nav-bg">
                <div className="centralizador-row-start gap-0">
                    {nav.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            onClick={() => handleSelect(index)}
                            className={`nav-a border-l-0 ${
                                item.isSelected
                                    ? "bg-bg font-bold"
                                    : "font-normal"
                            }`}
                        >
                            <img
                                className="w-24 h-24 md:w-32 md:h-32"
                                src={item.icon}
                                alt={item.name}
                            />
                            <p className="text-sm md:text-base text-white leading-8">
                                {item.name}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
            <Outlet />
        </>
    );
};
export default NavBar;
