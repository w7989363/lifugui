import React from 'react';
import './index.css';

const Gallery = (props) => {
  const { image } = props;
  return (
    <div className="image-container">
      <img src={image} className="image"/>
    </div>
  )
}

export default Gallery;