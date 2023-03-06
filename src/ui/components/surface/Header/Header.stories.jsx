import Header from "./Header";

export default {
    title: "surface/Header",
    component: Header,
    argTypes: {},
};

const Template = (args) => {
    return <Header {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
