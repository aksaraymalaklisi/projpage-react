import React, { useState } from 'react';
import styled from 'styled-components';
import img1 from '../imgs/paisagem1.jpg'
import img2 from '../imgs/paisagem3.jpg'
import img3 from '../imgs/paisagem4.jpg'
import img4 from '../imgs/topo-da-pedra-do-macaco.jpg'
import img5 from '../imgs/trilha-marica.jpg'
import img6 from '../imgs/trilha-silvado.jpg'
import img7 from '../imgs/tempimage.webp'
import img8 from '../imgs/background-image-test.jpg'

const GalleryContainer = styled.div`
    display: grid;
    background-color: rgba(255, 255, 255, 0.5);
    margin-bottom: 10px;
    border-radius: 10px;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    justify-items: center;
    align-items: center;
    padding: 20px;
    gap: 20px;
`;

const ImageThumbnail = styled.img`
    width: 450px;
    height: 350px;
    max-width: 100%; /* Eu normalmente uso esses dois porque não quero definir tamanhos, mas, por algum motivo, eles evitam um problema na galeria. Funciona?*/
    max-height: 100%; 
    object-fit: cover;
    border-radius: 5px;
    transition: opacity 1s;
    cursor: pointer;
    transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

const LightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
const LightboxImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

const Gallery = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
  ];

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div>
      <GalleryContainer>
        {images.map((image, index) => (
          <ImageThumbnail
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => openLightbox(image)}
          />
        ))}
      </GalleryContainer>

      {lightboxImage && (
        <LightboxOverlay onClick={closeLightbox}>
          <CloseButton onClick={closeLightbox}>&times;</CloseButton>
          <LightboxImage src={lightboxImage} alt="Lightbox" />
        </LightboxOverlay>
      )}
    </div>
  );
};

export default Gallery;
