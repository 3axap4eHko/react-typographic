const defaultFontFamiliy = '"Roboto", "Helvetica", "Arial", sans-serif';

function dash(str) {
  return str.replace(/([A-Z]+)/g, '-$1').toLowerCase();
}

function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

function pxToRemScale(scale, baseFontSize, fontSize) {
  return `${(scale * fontSize) / baseFontSize}rem`;
}

function createTypograhy({ pxToRem, color, fontFamily, fontWeight, fontSize, ...extra }) {
  const baseStyle = [
    `color: ${color};`,
    `font-family: ${fontFamily};`,
    `font-size: ${pxToRem(fontSize)};`,
    `font-weight: ${fontWeight};`,
  ];
  return Object.keys(extra)
    .reduce((result, name) => {
      return result.concat(`${dash(name)}: ${extra[name]};`);
    }, baseStyle)
    .join(' ');
}

export default ({
  color = '#000000',
  fontFamily = defaultFontFamiliy,
  fontSize = 14,
  fontWeightLight = 300,
  fontWeightRegular = 400,
  fontWeightMedium = 500,
  baseFontSize = 16,
} = {}) => {
  const pxToRem = pxToRemScale.bind(null, fontSize / 14, baseFontSize);

  return `
  .typographic-h1 { ${createTypograhy({ pxToRem, color, fontFamily, fontWeight: fontWeightLight, fontSize: 96, letterSpacing: -1.5 })} }
  .typographic-h2 { ${createTypograhy({ pxToRem, color, fontFamily, fontWeight: fontWeightLight, fontSize: 60, letterSpacing: -0.5 })} }
  .typographic-h3 { ${createTypograhy({ pxToRem, color, fontFamily, fontWeight: fontWeightRegular, fontSize: 48, letterSpacing: 0 })} }
  .typographic-h4 { ${createTypograhy({ pxToRem, color, fontFamily, fontWeight: fontWeightRegular, fontSize: 34, letterSpacing: 0.25 })} }
  .typographic-h5 { ${createTypograhy({ pxToRem, color, fontFamily, fontWeight: fontWeightRegular, fontSize: 24, letterSpacing: 0 })} }
  .typographic-h6 { ${createTypograhy({ pxToRem, color, fontFamily, fontWeight: fontWeightMedium, fontSize: 20, letterSpacing: 0.15 })} }
  .typographic-subtitle1 { ${createTypograhy({ pxToRem, color, fontFamily, fontWeight: fontWeightRegular, fontSize: 16, letterSpacing: 0.15 })} }
  .typographic-subtitle2 { ${createTypograhy({ pxToRem, color, fontFamily, fontWeight: fontWeightMedium, fontSize: 14, letterSpacing: 0.1 })} }
  .typographic-body1 { ${createTypograhy({ pxToRem, color, fontFamily, fontWeight: fontWeightRegular, fontSize: 16, letterSpacing: 0.15 })} }
  .typographic-body2 { ${createTypograhy({ pxToRem, color, fontFamily, fontWeight: fontWeightRegular, fontSize: 14, letterSpacing: 0.15 })} }
  .typographic-button { ${createTypograhy({ pxToRem, color, fontFamily, fontWeight: fontWeightMedium, fontSize: 14, letterSpacing: 0.4, textTransform: 'uppercase' })} }
  .typographic-caption { ${createTypograhy({ pxToRem, color, fontFamily, fontWeight: fontWeightRegular, fontSize: 12, letterSpacing: 0.4 })} }
  .typographic-overline { ${createTypograhy({ pxToRem, color, fontFamily, fontWeight: fontWeightRegular, fontSize: 12, letterSpacing: 1, textTransform: 'uppercase' })} }

  .typographic-align-inherit { text-align: inherit; }
  .typographic-align-left { text-align: left; }
  .typographic-align-right { text-align: right; }
  .typographic-align-center { text-align: center; }

  .typographic-transform-uppercase { text-transform: uppercase; }
  .typographic-transform-lowercase { text-transform: lowercase; }
  .typographic-transform-capitalize { text-transform: capitalize; }

  .typographic-no-wrap: { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; },
`;
};
