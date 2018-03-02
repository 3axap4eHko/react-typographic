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
  display4: 'h1',
  display3: 'h2',
  display2: 'h3',
  display1: 'h4',
  headline: 'h1',
  title: 'h1',
  subheading: 'h3',
  body2: 'aside',
  body1: 'span',
  caption: 'div',
  label: 'label',
  button: 'button',
  link: 'a',
};

const defaultStyle = createStyle();

const context = {
  style: defaultStyle,
  hash: hash(defaultStyle),
};

export default class Typographic extends Component {

  static propTypes = {
    type: oneOfKey(defaultHeadlineMapping),
    align: oneOf(['', 'left', 'center', 'right', 'justify']),
    transform: oneOf(['', 'uppercase', 'lowercase', 'capitalize']),
    noWrap: bool,
    gutterBottom: bool,
    headlineMapping: object,
  };

  static defaultProps = {
    type: 'body1',
    align: '',
    transform: '',
    noWrap: false,
    gutterBottom: false,
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

  componentWillMount() {
    Typographic.updateStyles();
  }

  componentDidMount() {
    Typographic.updateStyles();
  }

  render() {
    const { className, children = null, type, align, transform, noWrap, gutterBottom, headlineMapping } = this.props;
    if (children === null) {
      return null;
    }
    const Content = headlineMapping[type] || 'p';

    const finalClassName = classNames(
      'typographic',
      `typographic-${type}`,
      align && `typographic-align-${align}`,
      transform && `typographic-transform-${transform}`,
      gutterBottom && 'typographic-gutter-bottom',
      noWrap && 'typographic-no-wrap',
      className,
    );

    return (
      <Content className={finalClassName}>
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

