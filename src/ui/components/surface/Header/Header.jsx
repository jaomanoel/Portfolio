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
        <div className="bg-bg-dark-03 w-full flex px-16 justify-between text-xs lg:text-sm text-text-primary">
            <div className="flex items-center gap-8">
                <span>
                    <img className="w-24 h-24" src={Vscode} alt="vscode" />
                </span>
                <span className="hidden lg:block cursor-default hover:text-white hover:bg-bg-dark-01 rounded-lg py-2 px-8">
                    File
                </span>
                <span className="hidden lg:block cursor-default hover:text-white hover:bg-bg-dark-01 rounded-lg py-2 px-8">
                    Edit
                </span>
                <span className="hidden lg:block cursor-default hover:text-white hover:bg-bg-dark-01 rounded-lg py-2 px-8">
                    Selection
                </span>
                <span className="hidden lg:block cursor-default hover:text-white hover:bg-bg-dark-01 rounded-lg py-2 px-8">
                    View
                </span>
                <span className="hidden lg:block cursor-default hover:text-white hover:bg-bg-dark-01 rounded-lg py-2 px-8">
                    Go
                </span>
                <span className="hidden lg:block cursor-default hover:text-white hover:bg-bg-dark-01 rounded-lg py-2 px-8">
                    Run
                </span>
                <span className="hidden lg:block cursor-default hover:text-white hover:bg-bg-dark-01 rounded-lg py-2 px-8">
                    Terminal
                </span>
                <span className="hidden lg:block cursor-default hover:text-white hover:bg-bg-dark-01 rounded-lg py-2 px-8">
                    Help
                </span>
            </div>

            <div className="flex items-center">
                <p>myportfolio - Visual Studio Code</p>
            </div>

            <div className="flex items-center">
                <div className="hidden lg:flex items-center gap-10 ">
                    <a
                        href="#"
                        className="rounded-lg hover:bg-bg-dark-01 p-[1px]"
                    >
                        <img
                            className="w-24 h-24"
                            src={Wright}
                            alt="window-right"
                        />
                    </a>

                    <a
                        href="#"
                        className="rounded-lg hover:bg-bg-dark-01 p-[1px]"
                    >
                        <img
                            className="w-24 h-24"
                            src={Wbottom}
                            alt="window-bottom"
                        />
                    </a>

                    <a
                        href="#"
                        className="rounded-lg hover:bg-bg-dark-01 p-[1px]"
                    >
                        <img
                            className="w-24 h-24"
                            src={Wleft}
                            alt="window-left"
                        />
                    </a>

                    <a
                        href="#"
                        className="rounded-lg hover:bg-bg-dark-01 p-[1px]"
                    >
                        <img
                            className="w-24 h-24"
                            src={Windows}
                            alt="windows"
                        />
                    </a>
                </div>

                <div className="flex items-center">
                    <a
                        href="#"
                        className="flex justify-center items-center w-40 h-40 hover:bg-bg-dark-01"
                    >
                        <img className="w-24 h-24" src={Minus} alt="minus" />
                    </a>

                    <a
                        href="#"
                        className="justify-center hidden lg:flex items-center w-40 h-40 hover:bg-bg-dark-01"
                    >
                        <img
                            className="hidden lg:block"
                            src={Resize}
                            alt="resize"
                        />
                    </a>

                    <a
                        href="#"
                        className="flex justify-center items-center w-40 h-40 hover:bg-red-700"
                    >
                        <img className="w-24 h-24" src={Close} alt="close" />
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Header;
