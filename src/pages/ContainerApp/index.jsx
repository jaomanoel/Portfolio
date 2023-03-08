import React from "react";

import Header from "../../ui/components/surface/Header/Header";
import Explorer from "../../ui/components/surface/Explorer/Explorer";
import TabBar from "../../ui/components/surface/TabBar/TabBar";
import Footer from "../../ui/components/surface/Footer/Footer";
import NavBar from "../../ui/components/navigation/NavBar/NavBar";

function ContainerApp() {
    return (
        <div>
            <div className="flex flex-col justify-between h-[100vh] bg-bg">
                <Header />
                <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-layout h-full">
                    <div className="hidden md:block">
                        <TabBar />
                    </div>

                    <div className="hidden lg:block">
                        <Explorer />
                    </div>

                    <div className="flex flex-col">
                        <NavBar />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default ContainerApp;
