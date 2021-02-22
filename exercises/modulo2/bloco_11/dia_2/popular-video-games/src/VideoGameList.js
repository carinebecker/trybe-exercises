import React from 'react';
import VideoGame from './VideoGame';

class VideoGameList extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.map((jogo, index) => <VideoGame game={jogo} key={index}/>)}
      </div>
    )
  }
}

export default VideoGameList;
