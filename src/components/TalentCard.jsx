import React from 'react';
import './TalentCard.css';

const TalentCard = ({ talent }) => {
  return (
    <div className="talent-card">
      <h2>{talent.name}</h2>
      <p>{talent.description}</p>
      <div className="video-wrapper">
        <iframe
          width="100%"
          height="315"
          src={talent.videoUrl}
          title={talent.name}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default TalentCard;
