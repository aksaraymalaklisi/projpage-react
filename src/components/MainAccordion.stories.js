// MainAccordion.stories.js
import React from 'react';
import MainAccordion from './MainAccordion'; // Adjust the import path as necessary

export default {
  title: 'Components/MainAccordion',
  component: MainAccordion,
};

const Template = (args) => <MainAccordion {...args} />;

export const Default = Template.bind({});
Default.args = {};
