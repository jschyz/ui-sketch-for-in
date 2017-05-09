import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, render, Text } from 'react-sketchapp';
import Document from './components/document';
import Colour from './components/colour';

const styles = StyleSheet.create({
  sequence: {
    width: 58,
    height: 62,
    fontFamily: 'PingFang SC',
    fontWeight: 'bold',
    fontSize: 44,
    lineHeight: 62,
    color: '#e0e0e0',
  },
});

const App = ({ colorList }) => (
  <Document>
    <Text
      name="序号"
      style={styles.sequence}
    >01</Text>
    {colorList.map(colors => <Colour colors={colors} key={colors.ChineseName} />)}
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
          desc: '',
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
          desc: '图形文字、标题',
          hex: '#333333',
        },
        {
          name: 'B',
          desc: '内容文字',
          hex: '#666',
        },
        {
          name: 'C',
          desc: '辅助、默认文字',
          hex: '#B0B0B0',
        },
        {
          name: 'D',
          desc: '分割线',
          hex: '#E0E0E0',
        },
        {
          name: 'E',
          desc: '默认背景、搜索框',
          hex: '#EEEEEE',
        },
        {
          name: 'F',
          desc: '全局背景',
          hex: '#F6F6F6',
        },
        {
          name: 'G',
          desc: '仅用于标题、按钮深色背景中',
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
          desc: '',
          hex: '#4ADCB3',
        },
        {
          name: 'B',
          desc: '链接文字',
          hex: '#65BFE0',
        },
        {
          name: 'C',
          desc: '',
          hex: '#FF7F93',
        },
        {
          name: 'D',
          desc: '',
          hex: '#F9B867',
        },
        {
          name: 'E',
          desc: '',
          hex: '#B9AAF3',
        },
      ],
    },
  ];

  render(<App colorList={colorList} />, context.document.currentPage());
};
