import SocialMedia from "./SocialMedia";

export default {
    title: "navigation/SocialMedia",
    component: SocialMedia,
    argTypes: {},
};

const Template = (args) => {
    return <SocialMedia {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
