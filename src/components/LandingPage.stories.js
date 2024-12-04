import React from 'react';
import LandingPage from './LandingPage'; // Adjust the import path as necessary

export default {
  title: 'Pages/LandingPage',
  component: LandingPage,
};

const Template = () => <LandingPage />;

export const DefaultLandingPage = Template.bind({});
DefaultLandingPage.args = {};
