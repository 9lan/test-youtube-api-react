import React from "react";

export const VideoItem = ({ key, image, title, description }) => {
  return (
    <div key={key}>
      <div>
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
