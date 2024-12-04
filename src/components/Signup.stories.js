import React from 'react';
import Signup from './Signup'; // Adjust the import path as necessary

export default {
  title: 'Pages/Signup',
  component: Signup,
};

const Template = () => <Signup />;

export const DefaultSignup = Template.bind({});
DefaultSignup.args = {};
