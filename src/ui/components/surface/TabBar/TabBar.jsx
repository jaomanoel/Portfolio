import React from "react";

import File from "../../../../assets/icons/tabbar/file.svg";
import Search from "../../../../assets/icons/tabbar/search.svg";
import Git from "../../../../assets/icons/tabbar/git.svg";
import Debug from "../../../../assets/icons/tabbar/debug.svg";
import Extension from "../../../../assets/icons/tabbar/extension.svg";
import User from "../../../../assets/icons/tabbar/user.svg";
import Config from "../../../../assets/icons/tabbar/config.svg";

const TabBar = () => {
    return (
        <div className="w-74 h-full hidden items-center flex-col justify-between p-16 bg-bg-tabbar md:flex">
            <div className="flex flex-col gap-28">
                <img src={File} alt="file" />
                <img src={Search} alt="search" />
                <img src={Git} alt="git" />
                <img src={Debug} alt="debug" />
                <img src={Extension} alt="extension" />
            </div>
            <div className="flex flex-col gap-28">
                <img src={User} alt="user" />
                <img src={Config} alt="config" />
            </div>
        </div>
    );
};
export default TabBar;
