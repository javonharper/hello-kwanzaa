import { color } from './style';

const themes = {
  black: {
    base: color.black,
    light: color.grayLight,
    lighter: color.grayLighter,
    lightest: color.grayLightest
  },
  red: {
    base: color.red,
    light: color.redLight,
    lighter: color.redLighter,
    lightest: color.redLightest
  },
  green: {
    base: color.green,
    light: color.greenLight,
    lighter: color.greenLighter,
    lightest: color.greenLightest
  }
};

function getColors(color) {
  return themes[color] || black;
}

export const blackTheme = getColors('black');
export const greenTheme = getColors('green');
export const redTheme = getColors('red');
