import React from "react";

import Vscode from "../../../../assets/icons/header/vscode.svg";
import Minus from "../../../../assets/icons/header/minus.svg";
import Close from "../../../../assets/icons/header/close.svg";
import Resize from "../../../../assets/icons/header/resize.svg";
import Wleft from "../../../../assets/icons/header/window-left.svg";
import Wright from "../../../../assets/icons/header/window-right.svg";
import Wbottom from "../../../../assets/icons/header/window-bottom.svg";
import Windows from "../../../../assets/icons/header/windows.svg";

const Header = () => {
    return (
        <div className="bg-bg-dark-03 w-full flex px-16 justify-between py-13 text-xs lg:text-sm text-text-primary">
            <div className="flex items-center gap-16">
                <a href="#">
                    <img className="w-24 h-24" src={Vscode} alt="vscode" />
                </a>
                <a className="hidden lg:block" href="#">
                    File
                </a>
                <a className="hidden lg:block" href="#">
                    Edit
                </a>
                <a className="hidden lg:block" href="#">
                    Selection
                </a>
                <a className="hidden lg:block" href="#">
                    View
                </a>
                <a className="hidden lg:block" href="#">
                    Go
                </a>
                <a className="hidden lg:block" href="#">
                    Run
                </a>
                <a className="hidden lg:block" href="#">
                    Terminal
                </a>
                <a className="hidden lg:block" href="#">
                    Help
                </a>
            </div>

            <div className="flex items-center">
                <p>myportfolio - Visual Studio Code</p>
            </div>

            <div className="flex items-center gap-24">
                <div className="hidden lg:flex items-center gap-10 ">
                    <a href="#">
                        <img
                            className="w-24 h-24"
                            src={Wright}
                            alt="window-right"
                        />
                    </a>

                    <a href="#">
                        <img
                            className="w-24 h-24"
                            src={Wbottom}
                            alt="window-bottom"
                        />
                    </a>

                    <a href="#">
                        <img
                            className="w-24 h-24"
                            src={Wleft}
                            alt="window-left"
                        />
                    </a>

                    <a href="#">
                        <img
                            className="w-24 h-24"
                            src={Windows}
                            alt="windows"
                        />
                    </a>
                </div>

                <div className="flex items-center gap-8 md:gap-24">
                    <a href="#">
                        <img className="w-24 h-24" src={Minus} alt="minus" />
                    </a>

                    <a href="#">
                        <img
                            className="hidden lg:block"
                            src={Resize}
                            alt="resize"
                        />
                    </a>

                    <a href="#">
                        <img className="w-24 h-24" src={Close} alt="close" />
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Header;
