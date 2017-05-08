import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-sketchapp';
import chroma from 'chroma-js';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 50,
  },
  title: {
    width: 140,
    height: 90,
    padding: 10,
    backgroundColor: '#000',
  },
  chinese: {
    fontFamily: 'PingFang SC',
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
    lineHeight: 22,
  },
  english: {
    fontFamily: 'PingFang SC',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#fff',
    lineHeight: 20,
  },
  box: {
    fontSize: 14,
    fontFamily: 'PingFang SC',
    fontWeight: 'bold',
    color: '#fff',
  },
  rgb: {
    fontSize: 9,
    fontFamily: 'PingFang SC',
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'flex-start',
  },
  hex: {
    fontSize: 9,
    fontFamily: 'PingFang SC',
    fontWeight: 'bold',
    color: '#fff',
  },
});

const Lump = ({ name, hex }) => (
  <View
    name={name}
    style={{
      width: 90,
      height: 90,
      padding: 5,
      backgroundColor: hex,
    }}
  >
    <Text name={name} style={styles.box}>{name}</Text>
    <Text name="RGB" style={styles.rgb}>RGB {chroma(hex).rgb().join(',')}</Text>
    <Text name="Hex" style={styles.hex}>Hex {hex}</Text>
  </View>
);

Lump.propTypes = {
  name: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
};

const Colour = ({ colors }) => (
  <View name={colors.ChineseName} style={styles.container}>
    <View name="title" style={styles.title}>
      <Text name="Chinese" style={styles.chinese}>{colors.ChineseName}</Text>
      <Text name="English" style={styles.english}>{colors.EnglishName}</Text>
    </View>
    {colors.list.map(lump => <Lump name={lump.name} hex={lump.hex} />)}
  </View>
);

Colour.propTypes = {
  colors: PropTypes.shape({
    ChineseName: PropTypes.string,
    EnglishName: PropTypes.string,
    list: PropTypes.array,
  }).isRequired,
};

export default Colour;
