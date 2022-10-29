import {DEFAULT_EXTENSIONS} from '@babel/core';
import {Alert} from 'react-native';

// ADD CHROMA EXTENSIONS
// VSCODE ME COLOR HIGLIGTER BY SERGII N
//   AND VS COLOR PICKER
const colors = {
  BUTTON: {
    PRIMARY: '#7165E3',
    SECONDARY: '#9D93FF',
    TERTIARY: '#F5F6FA',
    PRIMARY_TEXT: '#FFFFFF',
    SECONDARY_TEXT: '#FFFFFF',
    TERTIARY_TEXT: '#191919',
  },
  SCREEN: {
    PRIMARY: '#FFFFFF',
    SECONDARY: '#F5F6FA',
    TERTIARY: '#8176EE',
  },
  // ---------------------------------------------------

  TEXT: {
    PRIMARY: '#191919',
    SECONDARY: '#3D3D3F',
    TERTIARY: '#',
  },
  PROGRESS_BAR: {
    PRIMARY: '#7165E3',
    SECONDARY: '#F5F6FA',
    TERTIARY: '#',
  },

  CHECKBOX: {
    PRIMARY: '#7165E3',
    SECONDARY: '#9D93FF',
    TERTIARY: '#F5F6FA',
    ACTIVE: '#7165E3',
    INCATIVE: '##F5F6FA',
  },
  RADIO_BUTTON: {
    PRIMARY: '#7165E3',
    SECONDARY: '#E8ECF5',
    TERTIARY: '#8B80F8',
    ACTIVE: '#',
    INCATIVE: '#',
    ACTIVE_BG: '#',
    INCATIVE_BG: '#',
  },
  TAB_NAV: {
    ACTIVE_TAB: '#191919',
    INCATIVE_TAB: '#F5F6FA',
  },
  OTHER: {
    WHITE: '#FFFFFF',
    WRANING: '#FFDE85',
    SUCCESSS: '#',
    Alert: '#FF9B91',
  },
  CARDS: {
    PRIMARY: '#FFDE85',
    SECONDARY: '#AF8EFF',
    TERTIARY: '#1E87FD',
    QUATAINERY: '#4C5A81',
  },
};

export default colors;
