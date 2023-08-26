import React from 'react';

const Card = ({ beer }) => {
  return (
    <div className="card">
      <img src={beer.image_url} alt={beer.name} />
      <h3>{beer.name}</h3>
      <p>{beer.tagline}</p>
    </div>
  );
};

export default Card;
