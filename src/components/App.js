import React from "react";
import youtube from "../api/youtube";

import { SearchBar } from "./SearchBar";
import { VideoComment } from "./video/VideoComment";
import { VideoList } from "./video/VideoList";
export class App extends React.Component {
  state = { videos: [] };

  onFormSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ videos: response.data.items });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <VideoList videos={this.state.videos} />
        <VideoComment />
      </div>
    );
  }
}
