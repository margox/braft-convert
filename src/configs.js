import React from 'react'

export const namedColors = {
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

const getStyleValue = style => style.split('-')[1]
const defaultUnitExportFn = unit => unit + 'px'
const defaultUnitImportFn = unit => unit.replace('px', '')

const ignoredNodeAttributes = ['style']
const ignoredEntityNodeAttributes = ['style', 'href', 'target', 'alt', 'title', 'id', 'controls', 'autoplay', 'loop', 'poster']

const spreadNodeAttributes = (attributesObject) => {
  return Object.keys(attributesObject).reduce((attributeString, attributeName) => {
    return `${attributeString} ${attributeName}="${attributesObject[attributeName]}"`
  }, '').replace(/^\s$/, '')
}

export const defaultFontFamilies = [{
    name: 'Araial',
    family: 'Arial, Helvetica, sans-serif'
  }, {
    name: 'Georgia',
    family: 'Georgia, serif'
  }, {
    name: 'Impact',
    family: 'Impact, serif'
  }, {
    name: 'Monospace',
    family: '"Courier New", Courier, monospace'
  }, {
    name: 'Tahoma',
    family: "tahoma, arial, 'Hiragino Sans GB', 宋体, sans-serif"
}]

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
  'header-five': 'h5',
  'header-six': 'h6',
  'unstyled': 'p',
  'blockquote': 'blockquote'
}

const blockTypes = Object.keys(blocks)
const blockNames = blockTypes.map(key => blocks[key])

const convertAtomicBlock = (block, contentState, blockNodeAttributes) => {

  if (!block || !block.key) {
    return <p></p>
  }

  const contentBlock = contentState.getBlockForKey(block.key)

  let { class: className, ...nodeAttrAsProps } = blockNodeAttributes
  nodeAttrAsProps.className = className

  if (!contentBlock) {
    return <p></p>
  }

  const entityKey = contentBlock.getEntityAt(0)

  if (!entityKey) {
    return <p></p>
  }

  const entity = contentState.getEntity(entityKey)
  const mediaType = entity.getType().toLowerCase()

  let { float, alignment } = block.data
  let { url, link, link_target, width, height, meta } = entity.getData()

  if (mediaType === 'image') {

    let imageWrapStyle = {}
    let styledClassName = ''

    if (float) {
      imageWrapStyle.float = float
      styledClassName += ' float-' + float
    } else if (alignment) {
      imageWrapStyle.textAlign = alignment
      styledClassName += ' align-' + alignment
    }

    if (link) {
      return (
        <div className={"media-wrap image-wrap" + styledClassName} style={imageWrapStyle}>
          <a style={{display:'inline-block'}} href={link} target={link_target}>
            <img {...nodeAttrAsProps} {...meta} src={url} width={width} height={height} style={{width, height}} />
          </a>
        </div>
      )
    } else {
      return (
        <div className={"media-wrap image-wrap" + styledClassName} style={imageWrapStyle}>
          <img {...nodeAttrAsProps} {...meta} src={url} width={width} height={height} style={{width, height}}/>
        </div>
      )
    }

  } else if (mediaType === 'audio') {
    return <div className="media-wrap audio-wrap"><audio controls {...nodeAttrAsProps} {...meta} src={url} /></div>
  } else if (mediaType === 'video') {
    return <div className="media-wrap video-wrap"><video controls {...nodeAttrAsProps} {...meta} src={url} width={width} height={height} /></div>
  } else if (mediaType === 'embed') {
    return <div className="media-wrap embed-wrap"><div dangerouslySetInnerHTML={{__html: url}}/></div>
  } else if (mediaType === 'hr') {
    return <hr></hr>
  } else {
    return <p></p>
  }

}

const entityToHTML = (options) => (entity, originalText) => {

  const { entityExportFn } = options
  const entityType = entity.type.toLowerCase()

  if (entityExportFn) {
    const customOutput = entityExportFn(entity, originalText)
    if (customOutput) {
      return customOutput
    }
  }

  if (entityType === 'link') {
    let { class: className, ...nodeAttrAsProps } = entity.data.nodeAttributes || {}
    nodeAttrAsProps.className = className
    return <a href={entity.data.href} target={entity.data.target} {...nodeAttrAsProps}/>
  }

}

const styleToHTML = (options) => (style) => {

  const unitExportFn = options.unitExportFn || defaultUnitExportFn

  if (options.styleExportFn) {
    const customOutput = options.styleExportFn(style, options)
    if (customOutput) {
      return customOutput
    }
  }

  style = style.toLowerCase()

  if (style === 'strikethrough') {
    return <span style={{textDecoration: 'line-through'}}/>
  } else if (style === 'superscript') {
    return <sup/>
  } else if (style === 'subscript') {
    return <sub/>
  } else if (style.indexOf('color-') === 0) {
    return <span style={{color: '#' + getStyleValue(style)}}/>
  } else if (style.indexOf('bgcolor-') === 0) {
    return <span style={{backgroundColor: '#' + getStyleValue(style)}}/>
  } else if (style.indexOf('fontsize-') === 0) {
    return <span style={{fontSize: unitExportFn(getStyleValue(style), 'font-size', 'html')}}/>
  } else if (style.indexOf('lineheight-') === 0) {
    return <span style={{lineHeight: unitExportFn(getStyleValue(style), 'line-height', 'html')}}/> 
  } else if (style.indexOf('letterspacing-') === 0) {
    return <span style={{letterSpacing: unitExportFn(getStyleValue(style), 'letter-spacing', 'html')}}/>
  } else if (style.indexOf('fontfamily-') === 0) {
    let fontFamily = options.fontFamilies.find((item) => item.name.toLowerCase() === getStyleValue(style))
    if (!fontFamily) return
    return <span style={{fontFamily: fontFamily.family}}/>
  }

}

const blockToHTML = (options) => (block) => {

  const { blockExportFn, contentState } = options

  if (blockExportFn) {
    const customOutput = blockExportFn(contentState, block)
    if (customOutput) {
      return customOutput
    }
  }

  let blockStyle = ''

  const blockType = block.type.toLowerCase()
  const { textAlign, textIndent, nodeAttributes = {} } = block.data
  const attributeString = spreadNodeAttributes(nodeAttributes)

  if (textAlign || textIndent) {

    blockStyle = ' style="'

    if (textAlign) {
      blockStyle += `text-align:${textAlign};`
    }

    if (textIndent && !isNaN(textIndent) && textIndent > 0) {
      blockStyle += `text-indent:${textIndent * 2}em;`
    }

    blockStyle += '"'

  }

  if (blockType === 'atomic') {
    return convertAtomicBlock(block, contentState, nodeAttributes)
  } else if (blockType === 'code-block') {

    const previousBlock = contentState.getBlockBefore(block.key)
    const nextBlock = contentState.getBlockAfter(block.key)
    const previousBlockType = previousBlock && previousBlock.getType()
    const nextBlockType = nextBlock && nextBlock.getType()

    let start = ''
    let end = ''

    if (previousBlockType !== 'code-block') {
      start = `<pre${attributeString}><code>`
    } else {
      start = ''
    }

    if (nextBlockType !== 'code-block') {
      end = '</code></pre>'
    } else {
      end = '<br/>'
    }

    return { start, end }

  } else if (blocks[blockType]) {
    return {
      start: `<${blocks[blockType]}${blockStyle}${attributeString}>`,
      end: `</${blocks[blockType]}>`
    }
  } else if (blockType === 'unordered-list-item') {
    return {
      start: `<li${blockStyle}${attributeString}>`,
      end: '</li>',
      nest: <ul/>
    }
  } else if (blockType === 'ordered-list-item') {
    return {
      start: `<li${blockStyle}${attributeString}>`,
      end: '</li>',
      nest: <ol/>
    }
  }

}

const htmlToStyle = (options, source) => (nodeName, node, currentStyle) => {

  if (!node || !node.style) {
    return currentStyle
  }

  const unitImportFn = options.unitImportFn || defaultUnitImportFn
  let newStyle = currentStyle;

  [].forEach.call(node.style, (style) => {

    if (nodeName === 'span' && style === 'color') {
      let color = getHexColor(node.style.color)
      newStyle = color ? newStyle.add('COLOR-' + color.replace('#', '').toUpperCase()) : newStyle
    } else if (nodeName === 'span' && style === 'background-color') {
      let color = getHexColor(node.style.backgroundColor)
      newStyle = color ? newStyle.add('BGCOLOR-' + color.replace('#', '').toUpperCase()) : newStyle
    } else if (nodeName === 'span' && style === 'font-size') {
      newStyle = newStyle.add('FONTSIZE-' + unitImportFn(node.style.fontSize, 'font-size', source))
    } else if (nodeName === 'span' && style === 'line-height' && !isNaN(parseFloat(node.style.lineHeight, 10))) {
      newStyle = newStyle.add('LINEHEIGHT-' + unitImportFn(node.style.lineHeight, 'line-height', source))
    } else if (nodeName === 'span' && style === 'letter-spacing' && !isNaN(parseFloat(node.style.letterSpacing, 10))) {
      newStyle = newStyle.add('LETTERSPACING-' + unitImportFn(node.style.letterSpacing, 'letter-spacing', source))
    } else if (nodeName === 'span' && style === 'text-decoration') {
      if (node.style.textDecoration === 'line-through') {
        newStyle = newStyle.add('STRIKETHROUGH')
      } else if (node.style.textDecoration === 'underline') {
        newStyle = newStyle.add('UNDERLINE')
      }
    } else if (nodeName === 'span' && style === 'font-family') {
      let fontFamily = options.fontFamilies.find((item) => item.family.toLowerCase() === node.style.fontFamily.toLowerCase())
      if (!fontFamily) return;
      newStyle = newStyle.add('FONTFAMILY-' + fontFamily.name.toUpperCase())
    }

  })

  if (nodeName === 'sup') {
    newStyle = newStyle.add('SUPERSCRIPT')
  } else if (nodeName === 'sub') {
    newStyle = newStyle.add('SUBSCRIPT')
  }

  options.styleImportFn && (newStyle = options.styleImportFn(nodeName, node, newStyle, source) || newStyle)
  return newStyle

}

const htmlToEntity = (options, source) => (nodeName, node, createEntity) => {

  if (options && options.entityImportFn) {
    const customInput = options.entityImportFn(nodeName, node, createEntity, source)
    if (customInput) {
      return customInput
    }
  }

  nodeName = nodeName.toLowerCase()

  const { alt, title, id, controls, autoplay, loop, poster } = node
  let meta = {}
  let nodeAttributes = {}

  id && (meta.id = id)
  alt && (meta.alt = alt)
  title && (meta.title = title)
  controls && (meta.controls = controls)
  autoplay && (meta.autoPlay = autoplay)
  loop && (meta.loop = loop)
  poster && (meta.poster = poster)

  node.attributes && Object.keys(node.attributes).forEach((key) => {
    let attr = node.attributes[key]
    ignoredEntityNodeAttributes.indexOf(attr.name) === -1 && (nodeAttributes[attr.name] = attr.value);
  })

  if (nodeName === 'a' && !node.querySelectorAll('img').length) {
    let href = node.getAttribute('href')
    let target = node.getAttribute('target')
    return createEntity('LINK', 'MUTABLE',{ href, target, nodeAttributes })
  } else if (nodeName === 'audio') {
    return createEntity('AUDIO', 'IMMUTABLE',{ url: node.getAttribute('src'), meta, nodeAttributes }) 
  } else if (nodeName === 'video') {
    return createEntity('VIDEO', 'IMMUTABLE',{ url: node.getAttribute('src'), meta, nodeAttributes }) 
  } else if (nodeName === 'img') {

    let parentNode = node.parentNode
    let entityData = { meta }
    let { width, height } = node.style

    entityData.url = node.getAttribute('src')
    width && (entityData.width = width)
    height && (entityData.height = height)

    if (parentNode.nodeName.toLowerCase() === 'a') {
      entityData.link = parentNode.getAttribute('href')
      entityData.link_target = parentNode.getAttribute('target')
    }

    return createEntity('IMAGE', 'IMMUTABLE', entityData) 

  } else if (nodeName === 'hr') {
    return createEntity('HR', 'IMMUTABLE', {}) 
  } else if (node.parentNode && node.parentNode.classList.contains('embed-wrap')) {

    const embedContent = node.innerHTML || node.outerHTML

    if (embedContent) {
      return createEntity('EMBED', 'IMMUTABLE', {
        url: embedContent
      })   
    }

  }

}

const htmlToBlock = (options, source) => (nodeName, node) => {

  if (options && options.blockImportFn) {
    const customInput = options.blockImportFn(nodeName, node, source)
    if (customInput) {
      return customInput
    }
  }

  let nodeAttributes = {}
  let nodeStyle = node.style || {}

  node.attributes && Object.keys(node.attributes).forEach((key) => {
    let attr = node.attributes[key]
    ignoredNodeAttributes.indexOf(attr.name) === -1 && (nodeAttributes[attr.name] = attr.value);
  })

  if (node.classList && node.classList.contains('media-wrap')) {

    return {
      type: 'atomic',
      data: {
        nodeAttributes: nodeAttributes,
        float: nodeStyle.float,
        alignment: nodeStyle.textAlign
      }
    }

  } else if (nodeName === 'img') {

    return {
      type: 'atomic',
      data: {
        nodeAttributes: nodeAttributes,
        float: nodeStyle.float,
        alignment: nodeStyle.textAlign
      }
    }

  } else if (nodeName === 'hr') {

    return {
      type: 'atomic',
      data: { nodeAttributes }
    }

  } else if (nodeName === 'pre') {

    node.innerHTML = node.innerHTML.replace(/<code(.*?)>/g, '').replace(/<\/code>/g, '')

    return {
      type: 'code-block',
      data: { nodeAttributes }
    }

  } else if (blockNames.indexOf(nodeName) !== -1) {

    const blockData = { nodeAttributes }

    if (nodeStyle.textAlign) {
      blockData.textAlign = nodeStyle.textAlign
    }

    if (nodeStyle.textIndent) {
      blockData.textIndent = /^\d+em$/.test(nodeStyle.textIndent) ? Math.ceil(parseInt(nodeStyle.textIndent, 10) / 2) : 1
    }

    return {
      type: blockTypes[blockNames.indexOf(nodeName)],
      data: blockData
    }

  }

}

export const getToHTMLConfig = (options) => {

  return {
    styleToHTML: styleToHTML(options),
    entityToHTML: entityToHTML(options),
    blockToHTML: blockToHTML(options)
  }

}

export const getFromHTMLConfig = (options, source = 'unknow') => {

  return { 
    htmlToStyle: htmlToStyle(options, source),
    htmlToEntity: htmlToEntity(options, source),
    htmlToBlock: htmlToBlock(options, source)
  }

}