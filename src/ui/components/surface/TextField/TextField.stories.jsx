import { ComponentMeta, ComponentStory } from "@storybook/react";
import TextField from "./TextField";

export default {
    title: "surface/TextField",
    component: TextField,
    argTypes: {},
};

const Template = (args) => {
    return <TextField {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
