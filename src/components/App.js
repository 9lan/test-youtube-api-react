import React from "react";
import youtube from "../api/youtube";

import { SearchBar } from "./SearchBar";
import { VideoComment } from "./video/VideoComment";
import { VideoList } from "./video/VideoList";
import { VideoDetail } from "./video/VideoDetail";
export class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount(term) {
    this.onFormSubmit(term);
  }

  onFormSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
          </div>
        </div>
        <div className="five wide column">
          <VideoList
            videos={this.state.videos}
            onVideoSelect={this.onVideoSelect}
          />
        </div>
        <VideoComment />
      </div>
    );
  }
}
