import Explorer from "./Explorer";

export default {
    title: "surface/Explorer",
    component: Explorer,
    argTypes: {},
};

const Template = (args) => {
    return <Explorer {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
