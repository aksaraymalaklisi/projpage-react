import React from 'react';
import Gallery from './Gallery'; // Adjust the import path as necessary

export default {
  title: 'Components/Gallery',
  component: Gallery,
};

const Template = () => <Gallery />;

export const DefaultGallery = Template.bind({});
DefaultGallery.args = {};
