import { useState } from "react";

export function useExplorer() {
    const [explorer, setExplorer] = useState(false);

    function setStateExplorer(state) {
        setExplorer(state);
    }

    function getStateExplorer() {
        return explorer;
    }

    function toggleExplorer() {
        setExplorer(!explorer);
    }

    function resetExplorer() {
        setExplorer(true);
    }

    return {
        explorer,
        setExplorer: setStateExplorer,
        getExplorer: getStateExplorer,
        toggleExplorer,
        resetExplorer,
    };
}
