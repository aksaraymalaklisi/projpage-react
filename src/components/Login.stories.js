import React from 'react';
import Login from './Login'; // Adjust the import path as necessary

export default {
  title: 'Pages/Login',
  component: Login,
};

const Template = () => <Login />;

export const DefaultLogin = Template.bind({});
DefaultLogin.args = {};
