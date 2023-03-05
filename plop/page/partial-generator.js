export default function(plop, handlers) {
    plop.setGenerator('partials', {
        description: 'Partial for page',
        prompts: [
            {
                name: 'name',
                type: 'input',
                message: 'Name of Partial: '
            },
            {
                name: 'folder',
                type: 'input',
                message: 'Name of folder: ',
            }
        ],
        actions(data){
            const basePath = `src/ui/partials/${data.folder.toLowerCase()}/_${handlers.createFilename(
                data.name
            )}`;

            const actions = [
                {
                    type: 'add',
                    path: `${basePath}.tsx`,
                    templateFile: 'plop/page/page-template.hbs'
                },
                {
                    type: 'add',
                    path: `${basePath}.style.tsx`,
                    templateFile: 'plop/page/page-style-template.hbs'
                }
            ];

            return actions;
        }
    })
};