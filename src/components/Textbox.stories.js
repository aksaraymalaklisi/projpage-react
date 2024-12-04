import React from 'react';
import Textbox from './Textbox'; // Adjust the import path as necessary

export default {
  title: 'Components/Textbox',
  component: Textbox,
};

const Template = () => <Textbox />;

export const DefaultTextbox = Template.bind({});
DefaultTextbox.args = {};
