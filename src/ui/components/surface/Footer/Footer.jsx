import React from "react";

import Close from "../../../../assets/icons/footer/close.svg";
import Danger from "../../../../assets/icons/footer/danger.svg";
import Live from "../../../../assets/icons/footer/live.svg";
import Feedback from "../../../../assets/icons/footer/feedback.svg";
import Bell from "../../../../assets/icons/footer/bell.svg";

const Footer = () => {
    return (
        <footer className="w-full flex justify-between items-center px-25 py-[.6rem] bg-bg-dark-03">
            <div className="flex items-center gap-4 text-white text-sm">
                <img src={Close} alt="close" />
                <span>0</span>
                <img src={Danger} alt="danger" />
                <span>0</span>
            </div>

            <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                    <img src={Live} alt="Live" />
                    <span className="text-white text-sm">Go Live</span>
                </div>

                <img src={Feedback} alt="feedback" />

                <img src={Bell} alt="bell" />
            </div>
        </footer>
    );
};
export default Footer;
