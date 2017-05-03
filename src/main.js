import React from 'react';
import PropTypes from 'prop-types';
import { render, Text } from 'react-sketchapp';
import Document from './components/document';

const App = props => (
  <Document>
    <Text style={{ fontFamily: 'Comic Sans MS', color: 'hotPink' }}>
      {props.message}
    </Text>
    <Text style={{ fontFamily: 'Comic Sans MS', color: 'hotPink' }}>
      {props.message}
    </Text>
  </Document>
);

App.propTypes = {
  message: PropTypes.string.isRequired,
};

export default (context) => {
  context.document.showMessage('It\'s alive 🙌');
  render(<App message="Hello world!" />, context.document.currentPage());
};
