"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFromHTMLConfig = exports.getToHTMLConfig = exports.blocks = exports.getHexColor = exports.defaultFontFamilies = exports.namedColors = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var namedColors = exports.namedColors = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  gold: "#ffd700",
  goldenrod: "#daa520",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  "indianred ": "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavender: "#e6e6fa",
  lavenderblush: "#fff0f5",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgrey: "#d3d3d3",
  lightgreen: "#90ee90",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370d8",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#d87093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};

var getStyleValue = function getStyleValue(style) {
  return style.split("-")[1];
};
var defaultUnitExportFn = function defaultUnitExportFn(unit) {
  return unit + "px";
};
var defaultUnitImportFn = function defaultUnitImportFn(unit) {
  return unit.replace("px", "");
};

var ignoredNodeAttributes = ["style"];
var ignoredEntityNodeAttributes = ["style", "href", "target", "alt", "title", "id", "controls", "autoplay", "loop", "poster"];

var spreadNodeAttributes = function spreadNodeAttributes(attributesObject) {
  return Object.keys(attributesObject).reduce(function (attributeString, attributeName) {
    return attributeString + " " + attributeName + "=\"" + attributesObject[attributeName] + "\"";
  }, "").replace(/^\s$/, "");
};

var defaultFontFamilies = exports.defaultFontFamilies = [{
  name: "Araial",
  family: "Arial, Helvetica, sans-serif"
}, {
  name: "Georgia",
  family: "Georgia, serif"
}, {
  name: "Impact",
  family: "Impact, serif"
}, {
  name: "Monospace",
  family: '"Courier New", Courier, monospace'
}, {
  name: "Tahoma",
  family: "tahoma, arial, 'Hiragino Sans GB', 宋体, sans-serif"
}];

var getHexColor = exports.getHexColor = function getHexColor(color) {
  color = color.replace("color:", "").replace(";", "").replace(" ", "");

  if (/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(color)) {
    return color;
  } else if (namedColors[color]) {
    return namedColors[color];
  } else if (color.indexOf("rgb") === 0) {
    var rgbArray = color.split(",");
    var convertedColor = rgbArray.length < 3 ? null : "#" + [rgbArray[0], rgbArray[1], rgbArray[2]].map(function (x) {
      var hex = parseInt(x.replace(/\D/g, ""), 10).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }).join("");

    return (/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(convertedColor) ? convertedColor : null
    );
  } else {
    return null;
  }
};

var blocks = exports.blocks = {
  "header-one": "h1",
  "header-two": "h2",
  "header-three": "h3",
  "header-four": "h4",
  "header-five": "h5",
  "header-six": "h6",
  unstyled: "p",
  blockquote: "blockquote"
};

var blockTypes = Object.keys(blocks);
var blockNames = blockTypes.map(function (key) {
  return blocks[key];
});

var convertAtomicBlock = function convertAtomicBlock(block, contentState, blockNodeAttributes) {
  if (!block || !block.key) {
    return _react2.default.createElement("p", null);
  }

  var contentBlock = contentState.getBlockForKey(block.key);

  var className = blockNodeAttributes.class,
      nodeAttrAsProps = _objectWithoutProperties(blockNodeAttributes, ["class"]);

  nodeAttrAsProps.className = className;

  if (!contentBlock) {
    return _react2.default.createElement("p", null);
  }

  var entityKey = contentBlock.getEntityAt(0);

  if (!entityKey) {
    return _react2.default.createElement("p", null);
  }

  var entity = contentState.getEntity(entityKey);
  var mediaType = entity.getType().toLowerCase();

  var _block$data = block.data,
      float = _block$data.float,
      alignment = _block$data.alignment;

  var _entity$getData = entity.getData(),
      url = _entity$getData.url,
      link = _entity$getData.link,
      link_target = _entity$getData.link_target,
      width = _entity$getData.width,
      height = _entity$getData.height,
      meta = _entity$getData.meta;

  if (mediaType === "image") {
    var imageWrapStyle = {};
    var styledClassName = "";

    if (float) {
      imageWrapStyle.float = float;
      styledClassName += " float-" + float;
    } else if (alignment) {
      imageWrapStyle.textAlign = alignment;
      styledClassName += " align-" + alignment;
    }

    if (link) {
      return _react2.default.createElement(
        "div",
        {
          className: "media-wrap image-wrap" + styledClassName,
          style: imageWrapStyle
        },
        _react2.default.createElement(
          "a",
          {
            style: { display: "inline-block" },
            href: link,
            target: link_target
          },
          _react2.default.createElement("img", _extends({}, nodeAttrAsProps, meta, {
            src: url,
            width: width,
            height: height,
            style: { width: width, height: height }
          }))
        )
      );
    } else {
      return _react2.default.createElement(
        "div",
        {
          className: "media-wrap image-wrap" + styledClassName,
          style: imageWrapStyle
        },
        _react2.default.createElement("img", _extends({}, nodeAttrAsProps, meta, {
          src: url,
          width: width,
          height: height,
          style: { width: width, height: height }
        }))
      );
    }
  } else if (mediaType === "audio") {
    return _react2.default.createElement(
      "div",
      { className: "media-wrap audio-wrap" },
      _react2.default.createElement("audio", _extends({ controls: true }, nodeAttrAsProps, meta, { src: url }))
    );
  } else if (mediaType === "video") {
    return _react2.default.createElement(
      "div",
      { className: "media-wrap video-wrap" },
      _react2.default.createElement("video", _extends({
        controls: true
      }, nodeAttrAsProps, meta, {
        src: url,
        width: width,
        height: height
      }))
    );
  } else if (mediaType === "embed") {
    return _react2.default.createElement(
      "div",
      { className: "media-wrap embed-wrap" },
      _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: url } })
    );
  } else if (mediaType === "hr") {
    return _react2.default.createElement("hr", null);
  } else {
    return _react2.default.createElement("p", null);
  }
};
/**
 * https://www.npmjs.com/package/draft-js-export-html#entitystylefn
 * @param {*} options
 */
var entityStyleFn = function entityStyleFn(options) {
  return function (entity, originalText) {
    var entityExportFn = options.entityExportFn;

    var entityType = entity.type.toLowerCase();

    if (entityExportFn) {
      var customOutput = entityStyleFn(options, entity, originalText);
      if (customOutput) {
        return customOutput;
      }
    }

    if (entityType === "link") {
      var _ref = entity.data.nodeAttributes || {},
          className = _ref.class,
          nodeAttrAsProps = _objectWithoutProperties(_ref, ["class"]);

      nodeAttrAsProps.className = className;

      var _entity$data = entity.data,
          url = _entity$data.url,
          _target = _entity$data.target,
          otherAttr = _objectWithoutProperties(_entity$data, ["url", "target"]);

      return _extends({
        element: "a",
        attributes: _extends({
          href: url,
          target: _target
        }, otherAttr)
      }, nodeAttrAsProps);
    }
  };
};
/**
 * 根据相等 查找指定值的 Style
 * @param {OrderedSet} style Style OrderedSet
 * @param {string} valueName 要查找的值
 */
var filterStyleValueEqual = function filterStyleValueEqual(style, valueName) {
  console.log(style);
  console.log(typeof style === "undefined" ? "undefined" : _typeof(style));

  return style.filter(function (value) {
    value = value.toLowerCase();
    return value === valueName;
  }).first();
};
/**
 * 根据 startsWith 查找指定值的 Style
 * @param {OrderSet} style Style OrderedSet
 * @param {string} valueName 要查找的值
 */
var filterStyleValueStartsWith = function filterStyleValueStartsWith(style, valueName) {
  return style.filter(function (value) {
    value = value.toLowerCase();
    return value.startsWith(valueName);
  }).first();
};
/**
 * https://www.npmjs.com/package/draft-js-export-html#inlinestylesfn
 * @param {*} options
 */
var inlineStyleFn = function inlineStyleFn(options) {
  return function (style) {
    var unitExportFn = options.unitExportFn || defaultUnitExportFn;

    if (options.inlineStyleFn) {
      var customOutput = options.inlineStyleFn(options, style);
      if (customOutput) {
        return customOutput;
      }
    }
    var value = null;

    value = filterStyleValueEqual(style, "strikethrough");
    if (value) {
      return {
        element: "span",
        style: {
          textDecoration: "line-through"
        }
      };
    }

    value = filterStyleValueEqual(style, "superscript");
    if (value) {
      return {
        element: "sup"
      };
    }

    value = filterStyleValueEqual(style, "subscript");
    if (value) {
      return {
        element: "sub"
      };
    }

    value = filterStyleValueStartsWith(style, "color-");
    if (value) {
      console.log("color", value);

      return {
        element: "span",
        style: {
          color: "#" + getStyleValue(value)
        }
      };
    }

    value = filterStyleValueStartsWith(style, "bgcolor-");
    if (value) {
      return {
        element: "span",
        style: {
          backgroundColor: "#" + getStyleValue(value)
        }
      };
    }

    value = filterStyleValueStartsWith(style, "fontsize-");
    if (value) {
      return {
        element: "span",
        style: {
          fontSize: unitExportFn(getStyleValue(value), "font-size", "html")
        }
      };
    }

    value = filterStyleValueStartsWith(style, "lineheight-");
    if (value) {
      return {
        element: "span",
        style: {
          lineHeight: unitExportFn(getStyleValue(value), "line-height", "html")
        }
      };
    }
    value = filterStyleValueStartsWith(style, "letterspacing-");
    if (value) {
      return {
        element: "span",
        style: {
          letterSpacing: unitExportFn(getStyleValue(value), "letter-spacing", "html")
        }
      };
    }
    value = filterStyleValueStartsWith(style, "fontfamily-");
    if (value) {
      var fontFamily = options.fontFamilies.find(function (item) {
        return item.name.toLowerCase() === getStyleValue(value);
      });
      if (!fontFamily) return {};
      return {
        element: "span",
        style: {
          fontFamily: fontFamily.family
        }
      };
    }
  };
};
/**
 * https://www.npmjs.com/package/draft-js-export-html#blockstylefn
 * @param {*} options
 */
var blockStyleFn = function blockStyleFn(options) {
  return function (block) {
    var blockStyleFn = options.blockStyleFn,
        contentState = options.contentState;


    if (blockStyleFn) {
      var customOutput = blockStyleFn(contentState, block);
      if (customOutput) {
        return customOutput;
      }
    }

    var blockStyle = "";

    var blockType = block.type.toLowerCase();

    var _block$data2 = block.data,
        textAlign = _block$data2.textAlign,
        textIndent = _block$data2.textIndent,
        _block$data2$nodeAttr = _block$data2.nodeAttributes,
        nodeAttributes = _block$data2$nodeAttr === undefined ? {} : _block$data2$nodeAttr;

    var attributeString = spreadNodeAttributes(nodeAttributes);

    if (textAlign || textIndent) {
      blockStyle = ' style="';

      if (textAlign) {
        blockStyle += "text-align:" + textAlign + ";";
      }

      if (textIndent && !isNaN(textIndent) && textIndent > 0) {
        blockStyle += "text-indent:" + textIndent * 2 + "em;";
      }

      blockStyle += '"';
    }

    if (blockType === "atomic") {
      return convertAtomicBlock(block, contentState, nodeAttributes);
    } else if (blockType === "code-block") {
      var previousBlock = contentState.getBlockBefore(block.key);
      var nextBlock = contentState.getBlockAfter(block.key);
      var previousBlockType = previousBlock && previousBlock.getType();
      var nextBlockType = nextBlock && nextBlock.getType();

      var start = "";
      var end = "";

      if (previousBlockType !== "code-block") {
        start = "<pre" + attributeString + "><code>";
      } else {
        start = "";
      }

      if (nextBlockType !== "code-block") {
        end = "</code></pre>";
      } else {
        end = "<br/>";
      }

      return { start: start, end: end };
    } else if (blocks[blockType]) {
      return {
        start: "<" + blocks[blockType] + blockStyle + attributeString + ">",
        end: "</" + blocks[blockType] + ">"
      };
    } else if (blockType === "unordered-list-item") {
      return {
        start: "<li" + blockStyle + attributeString + ">",
        end: "</li>",
        nest: _react2.default.createElement("ul", null)
      };
    } else if (blockType === "ordered-list-item") {
      return {
        start: "<li" + blockStyle + attributeString + ">",
        end: "</li>",
        nest: _react2.default.createElement("ol", null)
      };
    }
  };
};

/**
 * https://github.com/sstur/draft-js-utils/tree/master/packages/draft-js-import-element#options
 * @param {*} options
 */
var customInlineFn = function customInlineFn(options, source) {
  return function (element, _ref2) {
    var Style = _ref2.Style,
        Entity = _ref2.Entity;

    var node = element;
    var nodeName = element.tagName.toLowerCase();
    var unitImportFn = options.unitImportFn || defaultUnitImportFn;

    if (options && options.customInlineFn) {
      var customInput = options.customInlineFn(options, source, element, {
        Style: Style,
        Entity: Entity
      });
      if (customInput) {
        return customInput;
      }
    }

    var newStyle = null;
    [].forEach.call(node.style, function (style) {
      if (nodeName === "span" && style === "color") {
        var color = getHexColor(node.style.color);
        newStyle = color ? Style("COLOR-" + color.replace("#", "").toUpperCase()) : null;
      } else if (nodeName === "span" && style === "background-color") {
        var _color = getHexColor(node.style.backgroundColor);
        newStyle = _color ? Style("BGCOLOR-" + _color.replace("#", "").toUpperCase()) : null;
      } else if (nodeName === "span" && style === "font-size") {
        newStyle = Style("FONTSIZE-" + unitImportFn(node.style.fontSize, "font-size", source));
      } else if (nodeName === "span" && style === "line-height" && !isNaN(parseFloat(node.style.lineHeight, 10))) {
        newStyle = Style("LINEHEIGHT-" + unitImportFn(node.style.lineHeight, "line-height", source));
      } else if (nodeName === "span" && style === "letter-spacing" && !isNaN(parseFloat(node.style.letterSpacing, 10))) {
        newStyle = Style("LETTERSPACING-" + unitImportFn(node.style.letterSpacing, "letter-spacing", source));
      } else if (nodeName === "span" && style === "text-decoration") {
        if (node.style.textDecoration === "line-through") {
          newStyle = Style("STRIKETHROUGH");
        } else if (node.style.textDecoration === "underline") {
          newStyle = Style("UNDERLINE");
        }
      } else if (nodeName === "span" && style === "font-family") {
        var fontFamily = options.fontFamilies.find(function (item) {
          return item.family.toLowerCase() === node.style.fontFamily.toLowerCase();
        });
        if (!fontFamily) return;
        newStyle = Style("FONTFAMILY-" + fontFamily.name.toUpperCase());
      }
    });
    if (!!newStyle) {
      return newStyle;
    }
    if (nodeName === "sup") {
      return Style("SUPERSCRIPT");
    } else if (nodeName === "sub") {
      return Style("SUBSCRIPT");
    }

    var alt = node.alt,
        title = node.title,
        id = node.id,
        controls = node.controls,
        autoplay = node.autoplay,
        loop = node.loop,
        poster = node.poster;

    var meta = {};
    var nodeAttributes = {};

    id && (meta.id = id);
    alt && (meta.alt = alt);
    title && (meta.title = title);
    controls && (meta.controls = controls);
    autoplay && (meta.autoPlay = autoplay);
    loop && (meta.loop = loop);
    poster && (meta.poster = poster);

    node.attributes && Object.keys(node.attributes).forEach(function (key) {
      var attr = node.attributes[key];
      ignoredEntityNodeAttributes.indexOf(attr.name) === -1 && (nodeAttributes[attr.name] = attr.value);
    });

    if (nodeName === "a" && !node.querySelectorAll("img").length) {
      var href = node.getAttribute("href");
      var _target2 = node.getAttribute("target");
      return Entity("LINK", { href: href, target: _target2, nodeAttributes: nodeAttributes }, "MUTABLE");
    } else if (nodeName === "audio") {
      return Entity("AUDIO", { url: node.getAttribute("src"), meta: meta, nodeAttributes: nodeAttributes }, "IMMUTABLE");
    } else if (nodeName === "video") {
      return Entity("VIDEO", { url: node.getAttribute("src"), meta: meta, nodeAttributes: nodeAttributes }, "IMMUTABLE");
    } else if (nodeName === "img") {
      var parentNode = node.parentNode;
      var entityData = { meta: meta };
      var _node$style = node.style,
          width = _node$style.width,
          height = _node$style.height;


      entityData.url = node.getAttribute("src");
      width && (entityData.width = width);
      height && (entityData.height = height);

      if (parentNode.nodeName.toLowerCase() === "a") {
        entityData.link = parentNode.getAttribute("href");
        entityData.link_target = parentNode.getAttribute("target");
      }

      return Entity("IMAGE", entityData, "IMMUTABLE");
    } else if (nodeName === "hr") {
      return Entity("HR", {}, "IMMUTABLE");
    } else if (node.parentNode && node.parentNode.classList.contains("embed-wrap")) {
      var embedContent = node.innerHTML || node.outerHTML;

      if (embedContent) {
        return Entity("EMBED", {
          url: embedContent
        }, "IMMUTABLE");
      }
    }
    return null;
  };
};
/**
 * https://github.com/sstur/draft-js-utils/tree/master/packages/draft-js-import-element#options
 * @param {*} options
 */
var customBlockFn = function customBlockFn(options) {
  return function (element) {
    var node = element;
    var nodeName = element.tagName;

    if (options && options.customBlockFn) {
      var customInput = options.customBlockFn(options, element);
      if (customInput) {
        return customInput;
      }
    }

    var nodeAttributes = {};
    var nodeStyle = node.style || {};

    node.attributes && Object.keys(node.attributes).forEach(function (key) {
      var attr = node.attributes[key];
      ignoredNodeAttributes.indexOf(attr.name) === -1 && (nodeAttributes[attr.name] = attr.value);
    });

    if (node.classList && node.classList.contains("media-wrap")) {
      return {
        type: "atomic",
        data: {
          nodeAttributes: nodeAttributes,
          float: nodeStyle.float,
          alignment: nodeStyle.textAlign
        }
      };
    } else if (nodeName === "img") {
      return {
        type: "atomic",
        data: {
          nodeAttributes: nodeAttributes,
          float: nodeStyle.float,
          alignment: nodeStyle.textAlign
        }
      };
    } else if (nodeName === "hr") {
      return {
        type: "atomic",
        data: { nodeAttributes: nodeAttributes }
      };
    } else if (nodeName === "pre") {
      node.innerHTML = node.innerHTML.replace(/<code(.*?)>/g, "").replace(/<\/code>/g, "");

      return {
        type: "code-block",
        data: { nodeAttributes: nodeAttributes }
      };
    } else if (blockNames.indexOf(nodeName) !== -1) {
      var blockData = { nodeAttributes: nodeAttributes };

      if (nodeStyle.textAlign) {
        blockData.textAlign = nodeStyle.textAlign;
      }

      if (nodeStyle.textIndent) {
        blockData.textIndent = /^\d+em$/.test(nodeStyle.textIndent) ? Math.ceil(parseInt(nodeStyle.textIndent, 10) / 2) : 1;
      }

      return {
        type: blockTypes[blockNames.indexOf(nodeName)],
        data: blockData
      };
    }
  };
};

var getToHTMLConfig = exports.getToHTMLConfig = function getToHTMLConfig(options) {
  return {
    inlineStyleFn: inlineStyleFn(options),
    entityStyleFn: entityStyleFn(options),
    blockStyleFn: blockStyleFn(options)
  };
};

var getFromHTMLConfig = exports.getFromHTMLConfig = function getFromHTMLConfig(options) {
  var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "unknow";

  return {
    customInlineFn: customInlineFn(options, source),
    customBlockFn: customBlockFn(options, source)
  };
};
//# sourceMappingURL=configs.js.map