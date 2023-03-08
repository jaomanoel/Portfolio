import NavBar from "./NavBar";

export default {
    title: "navigation/NavBar",
    component: NavBar,
    argTypes: {},
};

const Template = (args) => {
    return <NavBar {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
