# React Typographic

Typographic component provides quick and fast way to have consistent text style.

## Props

##### type: oneOf(['display4', 'display3', 'display2', 'display1', 'headline', 'title', 'subheading', 'body2', 'body1', 'caption', 'label', 'button', 'link'])
Type of typography

Default: `body2`

##### align: oneOf(['left', 'center', 'right', 'justify'])
Typography text align

Default: `inherit`

##### transform: oneOf(['uppercase', 'lowercase', 'capitalize'])
Typography text transform

Default: `none`

##### noWrap: bool
A flag prevents text wrap

Default: `false` 

##### gutterBottom: bool
A flag adds bottom gutter

Default: `false`
 
##### headlineMapping: object
A map of types to elements

Default: `{
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
}`


## Example

```javascript
<Typographic type="display4" align="justify" gutterBottom>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
</Typographic>
```

## License
License [The MIT License](http://opensource.org/licenses/MIT)
Copyright (c) 2018 Ivan Zakharchanka
