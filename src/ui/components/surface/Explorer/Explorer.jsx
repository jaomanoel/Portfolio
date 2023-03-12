import React, { useState, useEffect } from "react";
import { useFolder } from "../../../../data/hooks/useFolder";
import { useFile } from "../../../../data/hooks/useFile";
import { useFileHome } from "../../../../data/hooks/useFileHome";

import NewFile from "../../../../assets/icons/explorer/new-file.svg";
import NewFolder from "../../../../assets/icons/explorer/new-folder.svg";
import Reload from "../../../../assets/icons/explorer/reload.svg";
import Collapse from "../../../../assets/icons/explorer/collapse.svg";
import Menu from "../../../../assets/icons/explorer/menu.svg";
import Arrow from "../../../../assets/icons/explorer/arrow.svg";

const Explorer = ({ state }) => {
    const [folders, setFolders] = useState(useFolder());
    const [files, setFiles] = useState(useFile());
    const [filesHome, setFilesHome] = useState(useFileHome());

    const handleClick = (src, index, path) => {
        const newItems = [...src];

        if (src[index].arrow) {
            newItems[index].arrow = false;
        } else {
            newItems[index].arrow = true;
        }

        if (path === "files") {
            setFiles(newItems);
        }

        if (path === "folders") {
            setFolders(newItems);
        }
    };

    return (
        <div
            className={`flex px-20 py-24 flex-col w-full gap-16 bg-bg-explorer h-full ${
                state ? "hidden" : "block"
            }`}
        >
            <div className="flex items-center gap-24">
                <p className="text-[1rem] text-white">EXPLORER: MYPORTFOLIO</p>

                <div className="flex items-center gap-8">
                    <a href="#">
                        <img
                            className="w-20 h-20"
                            src={NewFile}
                            alt="new file"
                        />
                    </a>

                    <a href="#">
                        <img
                            className="w-20 h-20"
                            src={NewFolder}
                            alt="new folder"
                        />
                    </a>

                    <a href="#">
                        <img className="w-25 h-25" src={Reload} alt="reload" />
                    </a>

                    <a href="#">
                        <img
                            className="w-20 h-20"
                            src={Collapse}
                            alt="collapse"
                        />
                    </a>

                    <a href="#">
                        <img className="w-25 h-28" src={Menu} alt="menu" />
                    </a>
                </div>
            </div>

            <div className="flex flex-col items-start gap-16">
                <div className="flex flex-col gap-16">
                    {folders.map((item, index) => (
                        <button
                            onClick={() =>
                                handleClick(folders, index, "folders")
                            }
                            key={index}
                            className={`flex items-center gap-8`}
                        >
                            <img
                                className={`w-14 h-14 rotate-${
                                    item.arrow ? 90 : 0
                                }`}
                                src={Arrow}
                                alt="arrow"
                            />

                            <img
                                className="w-24 h-24"
                                src={item.icon}
                                alt={item.name}
                            />

                            <p className="text-white text-sm tracking-wider">
                                {item.name}
                            </p>
                        </button>
                    ))}
                </div>

                {folders.map((item, index) => (
                    <React.Fragment key={index}>
                        {item.name === "src" && item.arrow && (
                            <div className="flex flex-col gap-16">
                                <div className="flex item-start gap-8">
                                    <div className="h-full w-2 bg-bg-divider"></div>

                                    <div className="flex flex-col gap-16">
                                        {files.map((item, index) => (
                                            <button
                                                key={index}
                                                onClick={() =>
                                                    handleClick(
                                                        files,
                                                        index,
                                                        "files"
                                                    )
                                                }
                                                className="flex items-center justify-end gap-8 w-full"
                                            >
                                                {item.isArrow ? (
                                                    <img
                                                        className={`w-14 h-14 ${
                                                            item.arrow
                                                                ? "rotate-90"
                                                                : "rotate-0"
                                                        }`}
                                                        src={Arrow}
                                                        alt="arrow"
                                                    />
                                                ) : (
                                                    <div className="w-14 h-14"></div>
                                                )}
                                                <div className="flex items-center gap-8 w-full">
                                                    <img
                                                        className="w-24 h-24"
                                                        src={item.icon}
                                                        alt={item.name}
                                                    />
                                                    <p className="text-white text-sm tracking-wider">
                                                        {item.name}
                                                    </p>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </React.Fragment>
                ))}

                <div className="flex flex-col gap-16 items-baseline pl-20 w-full">
                    {filesHome.map((item, index) => (
                        <button
                            key={index}
                            className="flex gap-8 items-center justify-end"
                        >
                            <img
                                className="w-24 h-24"
                                src={item.icon}
                                alt={item.name}
                            />
                            <p className="text-white text-sm tracking-wider">
                                {item.name}
                            </p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Explorer;
