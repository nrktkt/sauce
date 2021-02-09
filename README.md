
Embed snippets from source code on GitHub using [highlight.js](https://highlightjs.org) and [web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components).
All client side, all free and open source.

## Importing

```html
<script type='module' src="https://kag0.github.io/sauce/sauce.js"></script>
```

<script type='module' src="https://kag0.github.io/sauce/sauce.js">
<h1> [If you're reading this, click here](https://kag0.github.io/sauce)</h1>
</script>

## Embedding a file

<sauce-code
  repo='kag0/sauce' 
  file='example.html'
  lines='12:15'
></sauce-code>

## Overriding the language detection

<sauce-code
  repo='kag0/sauce' 
  file='example.html'
  lines='17:21'
></sauce-code>

## Embedding a snippet from a file

<sauce-code
  repo='kag0/sauce' 
  file='example.html'
  lines='23:27'
></sauce-code>

## Changing the theme

You can find a list of themes [here](https://cdnjs.com/libraries/highlight.js). 
The theme name is between the last `/` and the `.min.css`.  
Previews of themes are [here](https://highlightjs.org/static/demo/).

<sauce-code
  lang='html'
  repo='kag0/sauce' 
  file='example.html'
  theme='monokai-sublime'
  lines='29:33'
></sauce-code>