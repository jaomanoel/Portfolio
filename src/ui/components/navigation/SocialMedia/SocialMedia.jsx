import React from "react";

import Instagram from "../../../../assets/icons/instagram.svg";
import Linkedin from "../../../../assets/icons/linkedin.svg";
import Github from "../../../../assets/icons/github.svg";

const SocialMedia = () => {
    return (
        <div className="flex items-center gap-8">
            <a
                className="p-[1.2rem] bg-bg-dark-03 rounded-[.3rem]"
                href="#"
                target={"_blank"}
            >
                <img
                    className="w-16 h-16 md:w-24 md:h-24"
                    src={Github}
                    alt="Github"
                />
            </a>

            <a
                className="p-[1.2rem] bg-bg-dark-03 rounded-[.3rem]"
                href="#"
                target={"_blank"}
            >
                <img
                    className="w-16 h-16 md:w-24 md:h-24"
                    src={Linkedin}
                    alt="Linkedin"
                />
            </a>

            <a
                className="p-[1.2rem] bg-bg-dark-03 rounded-[.3rem]"
                href="#"
                target={"_blank"}
            >
                <img
                    className="w-16 h-16 md:w-24 md:h-24"
                    src={Instagram}
                    alt="Instagram"
                />
            </a>
        </div>
    );
};

export default SocialMedia;
