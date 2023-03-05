import TabBar from "./TabBar";

export default {
    title: "surface/TabBar",
    component: TabBar,
    argTypes: {},
};

const Template = (args) => {
    return <TabBar {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
