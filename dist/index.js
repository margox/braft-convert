'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertHTMLToRaw = exports.convertRawToHTML = undefined;

var _draftConvert = require('draft-convert');

var _configs = require('./configs');

var _draftJs = require('draft-js');

var convertRawToHTML = exports.convertRawToHTML = function convertRawToHTML(content) {
  var fontFamilies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _configs.defaultFontFamilies;

  try {
    var contentState = (0, _draftJs.convertFromRaw)(content);
    return (0, _draftConvert.convertToHTML)((0, _configs.getToHTMLConfig)({ contentState: contentState, fontFamilies: fontFamilies }))(contentState);
  } catch (error) {
    console.warn(error);
    return '';
  }
};

var convertHTMLToRaw = exports.convertHTMLToRaw = function convertHTMLToRaw(content) {
  try {
    var contentState = (0, _draftConvert.convertFromHTML)((0, _configs.getFromHTMLConfig)())(content);
    return (0, _draftJs.convertToRaw)(contentState);
  } catch (error) {
    console.warn(error);
    return {};
  }
};
//# sourceMappingURL=index.js.map