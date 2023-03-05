export default function (plop) {
    plop.setGenerator("component", {
        description: "Component",
        prompts: [
            {
                name: "name",
                type: "input",
                message: "Name of Component: ",
            },
            {
                name: "type",
                type: "list",
                message: "Type of Component: ",
                choices: [
                    {
                        name: "Data Display",
                        value: "data-display",
                    },
                    {
                        name: "Feedback",
                        value: "feedback",
                    },
                    {
                        name: "Inputs",
                        value: "inputs",
                    },
                    {
                        name: "Navigation",
                        value: "navigation",
                    },
                    {
                        name: "Surface",
                        value: "surface",
                    },
                ],
            },
        ],
        actions(data) {
            const basePath = `src/ui/components/${data.type}/${data.name}/`;
            const actions = [
                {
                    type: "add",
                    path: `${basePath}/${data.name}.tsx`,
                    templateFile: "plop/component/component-template.hbs",
                },
                {
                    type: "add",
                    path: `${basePath}/${data.name}.stories.tsx`,
                    templateFile: "plop/component/component-story-template.hbs",
                },
                {
                    type: "add",
                    path: `${basePath}/${data.name}.test.tsx`,
                    templateFile: "plop/component/component-test-template.hbs",
                },
            ];

            return actions;
        },
    });
}
