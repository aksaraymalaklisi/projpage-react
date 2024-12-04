import React from 'react';
import Main from './Main'; // Adjust the import path as necessary

export default {
  title: 'Components/Main',
  component: Main,
};

const Template = (args) => <Main {...args}>Your content here</Main>;

export const DefaultMain = Template.bind({});
DefaultMain.args = {};
