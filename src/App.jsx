import SocialMedia from "./ui/components/navigation/SocialMedia/SocialMedia";
import Explorer from "./ui/components/surface/Explorer/Explorer";
import Footer from "./ui/components/surface/Footer/Footer";
import Header from "./ui/components/surface/Header/Header";
import TabBar from "./ui/components/surface/TabBar/TabBar";

function App() {
    return (
        <div className="flex flex-col justify-between h-[100vh] bg-bg">
            <Header />
            <div className="grid grid-cols-layout h-full">
                <div className="hidden md:block">
                    <TabBar />
                </div>

                <div className="hidden lg:block">
                    <Explorer />
                </div>

                <div></div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
