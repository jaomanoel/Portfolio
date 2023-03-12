import React, { useState } from "react";

import File from "../../../../assets/icons/tabbar/file.svg";
import Search from "../../../../assets/icons/tabbar/search.svg";
import Git from "../../../../assets/icons/tabbar/git.svg";
import Debug from "../../../../assets/icons/tabbar/debug.svg";
import Extension from "../../../../assets/icons/tabbar/extension.svg";
import User from "../../../../assets/icons/tabbar/user.svg";
import Config from "../../../../assets/icons/tabbar/config.svg";

const TabBar = ({ func }) => {
    return (
        <div className="w-74 h-full hidden items-center flex-col justify-between p-16 bg-bg-tabbar md:flex">
            <div className="flex flex-col gap-28">
                <button onClick={func}>
                    <img src={File} alt="file" />
                </button>
                <a href="#">
                    <img src={Search} alt="search" />
                </a>
                <a href="#">
                    <img src={Git} alt="git" />
                </a>
                <a href="#">
                    <img src={Debug} alt="debug" />
                </a>
                <a href="#">
                    <img src={Extension} alt="extension" />
                </a>
            </div>
            <div className="flex flex-col gap-28">
                <a href="#">
                    <img src={User} alt="user" />
                </a>
                <a href="#">
                    <img src={Config} alt="config" />
                </a>
            </div>
        </div>
    );
};
export default TabBar;
