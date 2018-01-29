import React from 'react'

const namedColors = {
  "aliceblue": "#f0f8ff",
  "antiquewhite": "#faebd7",
  "aqua": "#00ffff",
  "aquamarine": "#7fffd4",
  "azure": "#f0ffff",
  "beige": "#f5f5dc",
  "bisque": "#ffe4c4",
  "black": "#000000",
  "blanchedalmond": "#ffebcd",
  "blue": "#0000ff",
  "blueviolet": "#8a2be2",
  "brown": "#a52a2a",
  "burlywood": "#deb887",
  "cadetblue": "#5f9ea0",
  "chartreuse": "#7fff00",
  "chocolate": "#d2691e",
  "coral": "#ff7f50",
  "cornflowerblue": "#6495ed",
  "cornsilk": "#fff8dc",
  "crimson": "#dc143c",
  "cyan": "#00ffff",
  "darkblue": "#00008b",
  "darkcyan": "#008b8b",
  "darkgoldenrod": "#b8860b",
  "darkgray": "#a9a9a9",
  "darkgreen": "#006400",
  "darkkhaki": "#bdb76b",
  "darkmagenta": "#8b008b",
  "darkolivegreen": "#556b2f",
  "darkorange": "#ff8c00",
  "darkorchid": "#9932cc",
  "darkred": "#8b0000",
  "darksalmon": "#e9967a",
  "darkseagreen": "#8fbc8f",
  "darkslateblue": "#483d8b",
  "darkslategray": "#2f4f4f",
  "darkturquoise": "#00ced1",
  "darkviolet": "#9400d3",
  "deeppink": "#ff1493",
  "deepskyblue": "#00bfff",
  "dimgray": "#696969",
  "dodgerblue": "#1e90ff",
  "firebrick": "#b22222",
  "floralwhite": "#fffaf0",
  "forestgreen": "#228b22",
  "fuchsia": "#ff00ff",
  "gainsboro": "#dcdcdc",
  "ghostwhite": "#f8f8ff",
  "gold": "#ffd700",
  "goldenrod": "#daa520",
  "gray": "#808080",
  "green": "#008000",
  "greenyellow": "#adff2f",
  "honeydew": "#f0fff0",
  "hotpink": "#ff69b4",
  "indianred ": "#cd5c5c",
  "indigo": "#4b0082",
  "ivory": "#fffff0",
  "khaki": "#f0e68c",
  "lavender": "#e6e6fa",
  "lavenderblush": "#fff0f5",
  "lawngreen": "#7cfc00",
  "lemonchiffon": "#fffacd",
  "lightblue": "#add8e6",
  "lightcoral": "#f08080",
  "lightcyan": "#e0ffff",
  "lightgoldenrodyellow": "#fafad2",
  "lightgrey": "#d3d3d3",
  "lightgreen": "#90ee90",
  "lightpink": "#ffb6c1",
  "lightsalmon": "#ffa07a",
  "lightseagreen": "#20b2aa",
  "lightskyblue": "#87cefa",
  "lightslategray": "#778899",
  "lightsteelblue": "#b0c4de",
  "lightyellow": "#ffffe0",
  "lime": "#00ff00",
  "limegreen": "#32cd32",
  "linen": "#faf0e6",
  "magenta": "#ff00ff",
  "maroon": "#800000",
  "mediumaquamarine": "#66cdaa",
  "mediumblue": "#0000cd",
  "mediumorchid": "#ba55d3",
  "mediumpurple": "#9370d8",
  "mediumseagreen": "#3cb371",
  "mediumslateblue": "#7b68ee",
  "mediumspringgreen": "#00fa9a",
  "mediumturquoise": "#48d1cc",
  "mediumvioletred": "#c71585",
  "midnightblue": "#191970",
  "mintcream": "#f5fffa",
  "mistyrose": "#ffe4e1",
  "moccasin": "#ffe4b5",
  "navajowhite": "#ffdead",
  "navy": "#000080",
  "oldlace": "#fdf5e6",
  "olive": "#808000",
  "olivedrab": "#6b8e23",
  "orange": "#ffa500",
  "orangered": "#ff4500",
  "orchid": "#da70d6",
  "palegoldenrod": "#eee8aa",
  "palegreen": "#98fb98",
  "paleturquoise": "#afeeee",
  "palevioletred": "#d87093",
  "papayawhip": "#ffefd5",
  "peachpuff": "#ffdab9",
  "peru": "#cd853f",
  "pink": "#ffc0cb",
  "plum": "#dda0dd",
  "powderblue": "#b0e0e6",
  "purple": "#800080",
  "rebeccapurple": "#663399",
  "red": "#ff0000",
  "rosybrown": "#bc8f8f",
  "royalblue": "#4169e1",
  "saddlebrown": "#8b4513",
  "salmon": "#fa8072",
  "sandybrown": "#f4a460",
  "seagreen": "#2e8b57",
  "seashell": "#fff5ee",
  "sienna": "#a0522d",
  "silver": "#c0c0c0",
  "skyblue": "#87ceeb",
  "slateblue": "#6a5acd",
  "slategray": "#708090",
  "snow": "#fffafa",
  "springgreen": "#00ff7f",
  "steelblue": "#4682b4",
  "tan": "#d2b48c",
  "teal": "#008080",
  "thistle": "#d8bfd8",
  "tomato": "#ff6347",
  "turquoise": "#40e0d0",
  "violet": "#ee82ee",
  "wheat": "#f5deb3",
  "white": "#ffffff",
  "whitesmoke": "#f5f5f5",
  "yellow": "#ffff00",
  "yellowgreen": "#9acd32"
}

export const getHexColor = (color) => {

  color = color.replace('color:', '').replace(';', '').replace(' ', '')

  if (/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(color)) {
    return color
  } else if (namedColors[color]) {
    return namedColors[color]
  } else if (color.indexOf('rgb') === 0) {

    let rgbArray = color.split(',')
    let convertedColor = rgbArray.length < 3 ? null : '#' + [rgbArray[0], rgbArray[1], rgbArray[2]].map(x => {
      const hex = parseInt(x.replace(/\D/g, ''), 10).toString(16)
      return hex.length === 1 ? '0' + hex : hex
    }).join('')

    return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(convertedColor) ? convertedColor : null

  } else {
    return null
  }

}

export const blocks = {
  'header-one': 'h1',
  'header-two': 'h2',
  'header-three': 'h3',
  'header-four': 'h4',
  'header-fiv': 'h5',
  'header-six': 'h6',
  'unstyled': 'p',
  'blockquote': 'blockquote'
}

const convertAtomicBlock = (block, contentState) => {

  const contentBlock = contentState.getBlockForKey(block.key)
  const entityKey = contentBlock.getEntityAt(0)
  const entity = contentState.getEntity(entityKey)
  const mediaType = entity.getType().toLowerCase()

  let { float, alignment } = block.data
  let { url, link, link_target, width, height } = entity.getData()

  if (mediaType === 'image') {

    let imageWrapStyle = {}

    if (float) {
      imageWrapStyle.float = float
    } else if (alignment) {
      imageWrapStyle.textAlign = alignment
    }

    if (link) {
      return (
        <div className="media-wrap image-wrap" style={imageWrapStyle}>
          <a style={{display:'inline-block'}} href={link} target={link_target}>
            <img src={url} width={width} height={height} />
          </a>
        </div>
      )
    } else {
      return (
        <div className="media-wrap image-wrap" style={imageWrapStyle}>
          <img src={url} width={width} height={height} />
        </div>
      )
    }

  } else if (mediaType === 'audio') {
    return <div className="media-wrap audio-wrap"><audio controls src={url} /></div>
  } else if (mediaType === 'video') {
    return <div className="media-wrap video-wrap"><video controls src={url} width={width} height={height} /></div>
  } else {
    return <p></p>
  }

}

const styleToHTML = (props) => (style) => {

  style = style.toLowerCase()

  if (style === 'strikethrough') {
    return <span style={{textDecoration: 'line-through'}}/>
  } else if (style === 'superscript') {
    return <sup/>
  } else if (style === 'subscript') {
    return <sub/>
  } else if (style.indexOf('color-') === 0) {
    return <span style={{color: '#' + style.split('-')[1]}}/> 
  } else if (style.indexOf('bgcolor-') === 0) {
    return <span style={{backgroundColor: '#' + style.split('-')[1]}}/> 
  } else if (style.indexOf('fontsize-') === 0) {
    return <span style={{fontSize: style.split('-')[1] + 'px'}}/> 
  } else if (style.indexOf('fontfamily-') === 0) {
    let fontFamily = props.fontFamilies.find((item) => item.name.toLowerCase() === style.split('-')[1])
    return <span style={{fontFamily: fontFamily.family}}/> 
  }

}

const blockToHTML = (contentState) => (block) => {

  let result = null
  let blockStyle = ""

  const blockType = block.type.toLowerCase()
  const { textAlign } = block.data

  if (textAlign) {
    blockStyle = ` style="text-align:${textAlign};"`
  }

  if (blockType === 'atomic') {
    return convertAtomicBlock(block, contentState)
  } else if (blockType === 'code-block') {
    return {
      start: `<pre><code${blockStyle}>`,
      end: '</code></pre>'
    }
  } else if (blocks[blockType]) {
    return {
      start: `<${blocks[blockType]}${blockStyle}>`,
      end: `</${blocks[blockType]}>`
    }
  }

}

const entityToHTML = (entity, originalText) => {

  let result = originalText
  const entityType = entity.type.toLowerCase()

  if (entityType === 'link') {
    return <a href={entity.data.href} target={entity.data.target}>{originalText}</a>
  } else if (entityType === 'color') {
    return <span style={{color:entity.data.color}}>{originalText}</span>
  } else if (entityType === 'bg-color') {
    return <span style={{backgroundColor:entity.data.color}}>{originalText}</span>
  }

}

export const getToHTMLConfig = (props) => {

  return {
    styleToHTML: styleToHTML(props),
    entityToHTML: entityToHTML,
    blockToHTML: blockToHTML(props.contentState)
  }

}

const htmlToStyle = (nodeName, node, currentStyle) => {

  if (nodeName === 'span' && node.style.color) {
    let color = getHexColor(node.style.color)
    return color ? currentStyle.add('COLOR-' + color.replace('#', '').toUpperCase()) : currentStyle
  } else if (nodeName === 'span' && node.style.backgroundColor) {
    let color = getHexColor(node.style.backgroundColor)
    return color ? currentStyle.add('BGCOLOR-' + color.replace('#', '').toUpperCase()) : currentStyle
  } else if (nodeName === 'sup') {
    return currentStyle.add('SUPERSCRIPT')
  } else if (nodeName === 'sub') {
    return currentStyle.add('SUBSCRIPT')
  } else if (nodeName === 'span' && node.style.fontSize) {
    return currentStyle.add('FONTSIZE-' + parseInt(node.style.fontSize, 10))
  } else if (nodeName === 'span' && node.style.textDecoration === 'line-through') {
    return currentStyle.add('STRIKETHROUGH')
  } else {
    return currentStyle
  }

}

const htmlToEntity = (nodeName, node, createEntity) => {

  if (nodeName === 'a' && !node.querySelectorAll('img').length) {

    let { href, target } = node
    return createEntity('LINK', 'MUTABLE',{ href, target })

  } else if (nodeName === 'audio') {
    return createEntity('AUDIO', 'IMMUTABLE',{ url: node.src }) 
  } else if (nodeName === 'video') {
    return createEntity('VIDEO', 'IMMUTABLE',{ url: node.src }) 
  } else if (nodeName === 'img') {

    let parentNode = node.parentNode
    let { src:url, width, height } = node
    width = width || 'auto'
    height = height || 'auto'
    let entityData = { url, width, height }

    if (parentNode.nodeName.toLowerCase() === 'a') {
      entityData.link = parentNode.href
      entityData.link_target = parentNode.target
    }

    return createEntity('IMAGE', 'IMMUTABLE', entityData) 

  }

}

const htmlToBlock = (nodeName, node) => {

  let nodeStyle = node.style || {}

  if (node.classList && node.classList.contains('media-wrap')) {

    return {
      type: 'atomic',
      data: {
        float: nodeStyle.float,
        alignment: nodeStyle.textAlign
      }
    }

  } else if (nodeName === 'img') {

    return {
      type: 'atomic',
      data: {
        float: nodeStyle.float,
        alignment: nodeStyle.textAlign
      }
    }

  } else if (nodeName === 'p' && nodeStyle.textAlign) {

    return {
      type: 'unstyled',
      data: {
        textAlign: nodeStyle.textAlign
      }
    }

  }

}

export const getFromHTMLConfig = (props) => {
  return { htmlToStyle, htmlToEntity, htmlToBlock }
}