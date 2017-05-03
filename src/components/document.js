import React from 'react';
import PropTypes from 'prop-types';
import { Artboard, View, StyleSheet } from 'react-sketchapp';

const Document = ({children}) => {
  return (
    <Artboard
      name='色彩'
    >
      <View
        name="bg"
        style={{
          borderWidth: 10,
          borderColor: '#fff',
          borderStyle: 'solid',
          backgroundColor: '#f6f6f6',
          flexDirection: 'column-reverse',
          width: 1080,
        }}
        >
        {children}
      </View>
    </Artboard>
  );
};

Document.propTypes = {

}


export default Document
