import React from 'react';
import PropTypes from 'prop-types';
import { render, Text } from 'react-sketchapp';
import Document from './components/document';
import Colour from './components/colour';

const App = ({ colorList }) => (
  <Document>
    <Text
      name="序号"
      style={{
        width: 58,
        height: 62,
        fontFamily: 'PingFang SC',
        fontWeight: 'bold',
        fontSize: 44,
        lineHeight: 62,
        color: '#e0e0e0',
      }}
    >01</Text>
    {colorList.map(colors => <Colour colors={colors} />)}
  </Document>
);

App.propTypes = {
  colorList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default (context) => {
  context.document.showMessage('It\'s alive 🙌');

  const colorList = [
    {
      ChineseName: '主色',
      EnglishName: 'Main color',
      list: [
        {
          name: '品牌色',
          hex: '#FF4338',
        },
      ],
    },
    {
      ChineseName: '辅色',
      EnglishName: 'Auxiliary color',
      list: [
        {
          name: 'A',
          hex: '#333333',
        },
        {
          name: 'B',
          hex: '#666',
        },
        {
          name: 'C',
          hex: '#B0B0B0',
        },
        {
          name: 'D',
          hex: '#E0E0E0',
        },
        {
          name: 'E',
          hex: '#EEEEEE',
        },
        {
          name: 'F',
          hex: '#F6F6F6',
        },
        {
          name: 'G',
          hex: '#FFFFFF',
        },
      ],
    },
    {
      ChineseName: '强调色',
      EnglishName: 'Accent color',
      list: [
        {
          name: 'A',
          hex: '#4ADCB3',
        },
        {
          name: 'B',
          hex: '#65BFE0',
        },
        {
          name: 'C',
          hex: '#FF7F93',
        },
        {
          name: 'D',
          hex: '#F9B867',
        },
        {
          name: 'E',
          hex: '#B9AAF3',
        },
      ],
    },
  ];

  render(<App colorList={colorList} />, context.document.currentPage());
};
