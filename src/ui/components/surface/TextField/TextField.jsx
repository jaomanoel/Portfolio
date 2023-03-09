import React from "react";

const TextField = ({ Text }) => {
    return (
        <h2
            className={`responsive-textfield font-bold text-neutral-textfield leading-none uppercase`}
        >
            {Text}
        </h2>
    );
};
export default TextField;
