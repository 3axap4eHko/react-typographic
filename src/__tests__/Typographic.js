import React from 'react';
import renderer from 'react-test-renderer';
import Typographic, { setTheme } from '../index';

test('Typographic empty is null', () => {
  const app = <Typographic />;
  const component = renderer.create(app);
  const tree = component.toJSON();
  expect(tree).toBe(null);
  expect(tree).toMatchSnapshot();
});

test('Typographic empty string is not null', () => {
  const app = <Typographic children="" />;
  const component = renderer.create(app);
  const tree = component.toJSON();
  expect(tree).not.toBe(null);
  expect(tree).toMatchSnapshot();
});

test('Typographic renders with classes', () => {
  const app = <Typographic
    type="title"
    align="center"
    transform="uppercase"
    children=""
    noWrap
    gutterBottom
  />;
  const component = renderer.create(app);
  const tree = component.toJSON();
  expect(tree.props.className).toContain('typographic ');
  expect(tree.props.className).toContain('typographic-title');
  expect(tree.props.className).toContain('typographic-align-center');
  expect(tree.props.className).toContain('typographic-transform-uppercase');
  expect(tree.props.className).toContain('typographic-no-wrap');
  expect(tree.props.className).toContain('typographic-gutter-bottom');
  expect(tree).toMatchSnapshot();
});

