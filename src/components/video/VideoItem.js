import React from "react";
import "./VideoItem.css";

export const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      onClick={() => onVideoSelect(video)}
      className="video-item item"
      key={video.id.videoId}
    >
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="video-item__content content">
        <h3 className="header">{video.snippet.title}</h3>
        <span>{video.snippet.channelTitle}</span>
        <p className="description">{video.snippet.description}</p>
      </div>
    </div>
  );
};
