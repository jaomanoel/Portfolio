import React from "react";

const TextField = ({ Text, props }) => {
    return (
        <h2
            className={`text-4xl opacity-5 responsive-textfield font-bold text-white leading-none uppercase ${props}`}
        >
            {Text}
        </h2>
    );
};
export default TextField;
