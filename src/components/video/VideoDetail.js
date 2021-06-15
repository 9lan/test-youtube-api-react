export const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <div>
          <h3 className="ui header">{video.snippet.title}</h3>
          <div>{video.id.videoId}</div>
          <p>{video.snippet.channelTitle}</p>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    </div>
  );
};
