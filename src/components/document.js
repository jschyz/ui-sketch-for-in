import React from 'react';
import PropTypes from 'prop-types';
import { Artboard, View } from 'react-sketchapp';

const Document = ({ children }) => (
  <Artboard
    name="色彩"
  >
    <View
      name="background"
      style={{
        borderWidth: 10,
        borderColor: '#fff',
        borderStyle: 'solid',
        backgroundColor: '#f6f6f6',
        flexDirection: 'column',
        width: 1080,
        padding: 40,
      }}
    >
      {children}
    </View>
  </Artboard>
);

Document.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Document;
