import React from "react";

import Close from "../../../../assets/icons/footer/close.svg";
import Danger from "../../../../assets/icons/footer/danger.svg";
import Live from "../../../../assets/icons/footer/live.svg";
import Feedback from "../../../../assets/icons/footer/feedback.svg";
import Bell from "../../../../assets/icons/footer/bell.svg";

const Footer = () => {
    return (
        <footer className="w-full flex justify-between items-center px-18 bg-bg-dark-03">
            <a
                href="#"
                className="flex items-center gap-4 text-white text-sm hover:bg-bg-dark-01 px-8 h-30"
            >
                <img src={Close} alt="close" />
                <span>0</span>
                <img src={Danger} alt="danger" />
                <span>0</span>
            </a>

            <div className="flex items-center gap-8">
                <a
                    href="#"
                    className="flex items-center hover:bg-bg-dark-01 gap-3 px-8 h-30"
                >
                    <img src={Live} alt="Live" />
                    <span className="text-white text-sm">Go Live</span>
                </a>

                <a
                    href="#"
                    className="flex items-center hover:bg-bg-dark-01 px-8 h-30"
                >
                    <img src={Feedback} alt="feedback" />
                </a>

                <a
                    href="#"
                    className="flex items-center hover:bg-bg-dark-01 px-8 h-30"
                >
                    <img src={Bell} alt="bell" />
                </a>
            </div>
        </footer>
    );
};
export default Footer;
