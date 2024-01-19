export const pxToRem = (value) => {
  return `${value / 16}rem`;
};

export const responsiveFontSizes = ({ sm, md, lg }) => {
  return {
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1440px)": {
      fontSize: pxToRem(lg),
    },
  };
};

export const getPercentage = (firstOperand, secondOperand) => {
  return Math.round(((secondOperand - firstOperand) / firstOperand) * 100);
};
