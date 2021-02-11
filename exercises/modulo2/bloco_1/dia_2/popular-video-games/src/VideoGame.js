import React from 'react';

class VideoGame extends React.Component {
  render() {
    const { title, developer, sales } = this.props.game
    return <p><strong>{title}</strong>, feito pela {developer} teve {sales} de vendas.</p>
  }
}

export default VideoGame;
