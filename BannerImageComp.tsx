import React from 'react';

interface BannerProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: () => void;
}

const BannerImageComp: React.FC<BannerProps> = ({ title, description, cta, image, background, onEdit }) => {
  return (
    <div style={{ backgroundColor: background, padding: '20px', position: 'relative' }}>
      <img src={image} alt={title} style={{ width: '100%', height: 'auto' }} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button>{cta}</button>
      <button onClick={onEdit} style={{ position: 'absolute', top: '10px', right: '10px' }}>✎</button>
    </div>
  );
};

export default BannerImageComp;
