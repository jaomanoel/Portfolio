import React, { useEffect, useState } from "react";

import Header from "../../ui/components/surface/Header/Header";
import Explorer from "../../ui/components/surface/Explorer/Explorer";
import TabBar from "../../ui/components/surface/TabBar/TabBar";
import Footer from "../../ui/components/surface/Footer/Footer";
import NavBar from "../../ui/components/navigation/NavBar/NavBar";
import { useExplorer } from "../../data/hooks/useExplorer";
import { useNav } from "../../data/hooks/useNav";
import { useLocation } from "react-router-dom";

function ContainerApp() {
    const explorer = useExplorer();
    const nav = useNav();
    const location = useLocation();

    useEffect(() => {
        const newNav = [...nav.getNav()];

        console.log(location.pathname);

        newNav.map((item) => {
            if (item.path == location.pathname && item.isSelected === false) {
                item.isSelected = true;
            } else {
                item.isSelected = false;
            }
        });

        nav.setNav(newNav);
    }, []);

    return (
        <div>
            <div className="flex flex-col justify-between h-[100vh] bg-bg">
                <Header />
                <div className="flex h-full">
                    <div className="w-74 hidden tablet:block">
                        <TabBar func={explorer.toggleExplorer} />
                    </div>

                    <div className={`hidden md:hidden laptop:block`}>
                        {explorer.getExplorer && (
                            <Explorer state={explorer.explorer} />
                        )}
                    </div>

                    <div className="flex w-full flex-col">
                        <NavBar getNav={nav.getNav} setNav={nav.setNav} />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default ContainerApp;
