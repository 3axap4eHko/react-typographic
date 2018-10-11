import React, { Component } from 'react';
import { string, number, object, oneOf, bool, oneOfType } from 'prop-types';
import createStyle from './createStyle';

function classNames(...classNames) {
  return classNames.filter(Boolean).join(' ');
}

const oneOfKey = target => oneOf(Object.keys(target));

function hash(str) {
  let hash = 5381;
  let i = str.length;

  while (i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  return hash >>> 0;
}

const ID = '__typographic_styles__';

function getStyleElement() {
  const style = document.getElementById(ID) || document.createElement('style');
  style.id = ID;
  if (!style.parentNode) {
    document.head.appendChild(style);
  }
  return style;
}

export const defaultHeadlineMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  button: 'button',
  caption: 'div',
  overline: 'div',
};

const defaultStyle = createStyle();

const context = {
  style: defaultStyle,
  hash: hash(defaultStyle),
};

export default class Typographic extends Component {
  static propTypes = {
    type: oneOfKey(defaultHeadlineMapping),
    align: oneOf(['', 'inherit', 'left', 'center', 'right', 'justify']),
    transform: oneOf(['', 'uppercase', 'lowercase', 'capitalize']),
    noWrap: bool,
    lineClamp: number,
    headlineMapping: object,
  };

  static defaultProps = {
    type: 'body1',
    align: '',
    transform: '',
    noWrap: false,
    headlineMapping: defaultHeadlineMapping,
  };

  static updateStyles() {
    if (typeof document !== 'undefined') {
      const style = getStyleElement();
      if (style.dataset.hash !== context.hash) {
        style.innerHTML = context.style;
        style.dataset.hash = context.hash;
      }
    }
  }

  static getDerivedStateFromProps() {
    Typographic.updateStyles();
    return null;
  }

  state = {};

  componentDidMount() {
    Typographic.updateStyles();
  }

  render() {
    const {
      className,
      style,
      type,
      align,
      transform,
      lineClamp,
      noWrap,
      gutterBottom,
      headlineMapping,
      children = null,
      ...props
    } = this.props;
    if (children === null) {
      return null;
    }
    const Content = headlineMapping[type] || 'p';

    const finalClassName = classNames(
      `typographic-${type}`,
      align && `typographic-align-${align}`,
      transform && `typographic-transform-${transform}`,
      noWrap && 'typographic-no-wrap',
      className
    );

    const finalStyle = { ...style };
    if (lineClamp) {
      finalStyle.WebkitLineClamp = lineClamp;
    }

    return (
      <Content style={finalStyle} className={finalClassName} {...props}>
        {children}
      </Content>
    );
  }
}

export function setTheme(theme) {
  const style = createStyle(theme);
  context.style = style;
  context.hash = hash(style);
  Typographic.updateStyles();

  return context;
}
