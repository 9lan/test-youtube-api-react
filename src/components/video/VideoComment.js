import React from "react";
import { Link } from "react-router-dom";

export class VideoComment extends React.Component {
  render() {
    return (
      <div className="ui comments">
        <h3 className="ui dividing header">{"Comments"}</h3>
        <div className="comment">
          <Link>
            <span className="avatar">
              <img src="" alt="avatar" />
            </span>
          </Link>
          <div className="content">
            <Link>
              <span className="author">{"Matt"}</span>
            </Link>
            <div className="metadata">
              <span className="date">{"Today at 5:42PM"}</span>
            </div>
            <div className="text">How artistic!</div>
            <div className="actions">
              <Link>
                <span className="reply">{"Reply"}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
