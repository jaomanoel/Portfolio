export default function (plop, handlers) {
    plop.setGenerator("page", {
        description: "Page",
        prompts: [
            {
                name: "name",
                type: "input",
                message: "Name of Page: ",
            },
            {
                name: "folder",
                type: "input",
                message: "Name of folder: ",
            },
        ],
        actions(data) {
            const actions = [
                {
                    type: "add",
                    path: `src/pages/${data.folder.toLowerCase()}/${handlers.createFilename(
                        data.name
                    )}.jsx`,
                    templateFile: "plop/page/page-template.hbs",
                },
            ];

            return actions;
        },
    });
}
