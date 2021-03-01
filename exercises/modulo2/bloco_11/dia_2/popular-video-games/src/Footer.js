import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {
  render () {
    return (
      <footer>
        <p>{this.props.text}</p>
      </footer>
    )
  }
}

Footer.propTypes = {
  text: PropTypes.string
}

Footer.propTypes = {
  text: 'OBA'
}

export default Footer;
