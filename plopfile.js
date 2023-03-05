import componentGenerator from "./plop/component/component-generator.js";
import pageGenerator from "./plop/page/page-generator.js";
import partialGenerator from "./plop/page/partial-generator.js";

export default function (plop) {
    Object.keys(handlers).forEach((functionName) => {
        plop.setHelper(functionName, handlers[functionName]);
    });
    componentGenerator(plop, handlers);
    pageGenerator(plop, handlers);
    partialGenerator(plop, handlers);
}

const handlers = {
    getPath(folder, name) {
        let path = "";
        if (folder) {
            path += `${folder.toLowerCase()}/`;
        }
        path += `${name.toLowerCase()}`;
        return path;
    },
    createFilename(componetName) {
        return componetName
            .replace(/([A-Z])/g, " $1")
            .trim()
            .toLowerCase()
            .split(" ")
            .join("-");
    },
};
