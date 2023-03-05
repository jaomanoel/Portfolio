import Footer from "./Footer";

export default {
    title: "surface/Footer",
    component: Footer,
    argTypes: {},
};

const Template = (args) => {
    return <Footer {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
