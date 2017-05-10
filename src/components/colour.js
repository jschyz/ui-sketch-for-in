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
  desc: {
    fontSize: 9,
    fontFamily: 'PingFang SC',
    fontWeight: 'bold',
    color: '#333',
  },
  pairs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rgb: {
    fontSize: 9,
    fontFamily: 'PingFang SC',
    fontWeight: 'bold',
    color: '#fff',
  },
  hex: {
    fontSize: 9,
    fontFamily: 'PingFang SC',
    fontWeight: 'bold',
    color: '#fff',
  },
});

const Lump = ({ name, desc, hex }) => (
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
    <Text name={desc} style={styles.desc}>{desc}</Text>
    <View name="属性值" style={styles.pairs}>
      <Text name="RGB" style={styles.rgb}>RGB</Text>
      <Text name="RGB" style={styles.rgb}>{chroma(hex).rgb().join(',')}</Text>
    </View>
    <View name="属性值" style={styles.pairs}>
      <Text name="Hex" style={styles.hex}>Hex</Text>
      <Text name="Hex" style={styles.hex}>{hex}</Text>
    </View>

  </View>
);

Lump.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
};

const Colour = ({ colors }) => (
  <View name={colors.ChineseName} style={styles.container}>
    <View name="title" style={styles.title}>
      <Text name="Chinese" style={styles.chinese}>{colors.ChineseName}</Text>
      <Text name="English" style={styles.english}>{colors.EnglishName}</Text>
    </View>
    {colors.list.map(lump => <Lump name={lump.name} desc={lump.desc} hex={lump.hex} key={lump.name} />)}
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
