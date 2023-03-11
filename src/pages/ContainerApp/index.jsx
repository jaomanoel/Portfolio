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
                <div className="flex h-full">
                    <div className="w-74 hidden tablet:block">
                        <TabBar />
                    </div>

                    <div className="w-[340px] hidden laptop:block">
                        <Explorer />
                    </div>

                    <div className="flex w-full flex-col">
                        <NavBar />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default ContainerApp;
