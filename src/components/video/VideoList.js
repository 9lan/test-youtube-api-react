import { VideoItem } from "./VideoItem";

export const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        title={video.snippet.title}
        description={video.snippet.description}
        image={video.snippet.thumbnails.default.url}
      />
    );
  });
  return <div>{renderedList}</div>;
};
