# React Typographic

A typography component.

## Props

#### type: oneOf(['display4', 'display3', 'display2', 'display1', 'headline', 'title', 'subheading', 'body2', 'body1', 'caption', 'label', 'button', 'link'])
Type of typography

Default: `body2`

#### align: oneOf(['left', 'center', 'right', 'justify'])
Typography text align

Default: `inherit`

#### transform: oneOf(['uppercase', 'lowercase', 'capitalize'])
Typography text transform

Default: `none`

#### noWrap: bool
A flag prevents text wrap

Default: `false` 

#### gutterBottom: bool
A flag adds bottom gutter

Default: `false`
 
#### headlineMapping: object
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
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</Typographic>
```

## License
License [The MIT License](http://opensource.org/licenses/MIT)
Copyright (c) 2018 Ivan Zakharchanka
