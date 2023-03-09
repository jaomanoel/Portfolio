import React from "react";

const TextField = ({ Text }) => {
    return (
        <h2
            className={`text-4xl opacity-5 responsive-textfield font-bold text-white leading-none uppercase`}
        >
            {Text}
        </h2>
    );
};
export default TextField;
