function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

function pxToRem(value, baseFontSize) {
  return `${value / baseFontSize}rem`;
}

export default ({
  color = '#212121',
  fontFamily = '"Roboto", "Helvetica", "Arial", sans-serif',
  fontSize = 14,
  fontWeightLight = 200,
  fontWeightRegular = 400,
  fontWeightMedium = 500,
  baseFontSize = 16,
} = {}) => {

  return `
.typographic {
  margin: 0;
  padding: 0;
  color: ${color};
  font-family: ${fontFamily};
  font-size: ${pxToRem(fontSize, baseFontSize)};
  font-weight: ${fontWeightRegular};
}

.typographic-display4 {
  font-size: ${pxToRem(112, baseFontSize)};
  letter-spacing: -0.04em;
  line-height: ${round(128 / 112)}em;
  margin-left: -0.06em;
  font-weight: ${fontWeightLight};
}

.typographic-display3 {
  font-size: ${pxToRem(56, baseFontSize)};
  letter-spacing: -0.02em;
  line-height: ${round(73 / 56)}em;
  margin-left: -0.04em;
}

.typographic-display2 {
  font-size: ${pxToRem(45, baseFontSize)};
  line-height: ${round(48 / 45)}em;
  margin-left: -0.04em;
}

.typographic-display1 {
  font-size: ${pxToRem(34, baseFontSize)};
  line-height: ${round(41 / 34)}em;
  margin-left: -0.04em;
}

.typographic-headline {
  font-size: ${pxToRem(24, baseFontSize)};
  line-height: ${round(32.5 / 24)}em;
}

.typographic-title {
  font-size: ${pxToRem(21, baseFontSize)};
  line-height: ${round(24.5 / 21)}em;
  font-weight: ${fontWeightMedium};
}

.typographic-subheading {
  font-size: ${pxToRem(16, baseFontSize)};
  line-height: ${round(24 / 16)}em;
}

.typographic-body2 {
  font-size: ${pxToRem(14, baseFontSize)};
  line-height: ${round(24 / 14)}em;
  font-weight: ${fontWeightMedium};
}

.typographic-body1 {
  font-size: ${pxToRem(14, baseFontSize)};
  line-height: ${round(20.5 / 14)}em;
}

.typographic-caption {
  font-size: ${pxToRem(12, baseFontSize)};
  line-height: ${round(16.5 / 12)}em;
}

.typographic-label {
  font-size: ${pxToRem(12, baseFontSize)};
  line-height: ${round(16.5 / 12)}em;
}

.typographic-button {
  text-transform: uppercase;
  font-weight: ${fontWeightMedium};
}

.typographic-link {
  font-weight: ${fontWeightMedium};
}

.typographic-align-left {
  text-align: left;
}
.typographic-align-center {
  text-align: center;
}
.typographic-align-right {
  text-align: right;
}
.typographic-align-justify {
  text-align: justify;
}

.typographic-transform-uppercase {
  text-transform: uppercase;
}
.typographic-transform-lowercase {
  text-transform: lowercase;
}
.typographic-transform-capitalize {
  text-transform: capitalize;
}

.typographic-gutter-bottom {
  margin-bottom: 0.35em;
}

.typographic-no-wrap {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

`;
};