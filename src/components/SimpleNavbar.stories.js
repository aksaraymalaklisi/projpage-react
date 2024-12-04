import React from 'react';
import SimpleNavbar from './SimpleNavbar'; // Adjust the import path as necessary

export default {
  title: 'Components/SimpleNavbar',
  component: SimpleNavbar,
};

const Template = () => <SimpleNavbar />;

export const DefaultNavbar = Template.bind({});
DefaultNavbar.args = {};
