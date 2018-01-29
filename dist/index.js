'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertHTMLToRaw = exports.convertRawToHTML = undefined;

var _draftConvert = require('draft-convert');

var _configs = require('./configs');

var _draftJs = require('draft-js');

(function () {
  var enterModule = require('react-hot-loader/patch').enterModule;

  enterModule && enterModule(module);
})();

var convertRawToHTML = exports.convertRawToHTML = function convertRawToHTML(content) {
  var fontFamilies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  try {
    var contentState = (0, _draftJs.convertFromRaw)(content);
    return (0, _draftConvert.convertToHTML)((0, _configs.getToHTMLConfig)({ contentState: contentState, fontFamilies: fontFamilies }))(contentState);
  } catch (error) {
    return '';
  }
};

var convertHTMLToRaw = exports.convertHTMLToRaw = function convertHTMLToRaw(content) {
  try {
    var contentState = (0, _draftConvert.convertFromHTML)((0, _configs.getFromHTMLConfig)())(content);
    return (0, _draftJs.convertToRaw)(contentState);
  } catch (error) {
    return {};
  }
};
;

(function () {
  var reactHotLoader = require('react-hot-loader/patch').default;

  var leaveModule = require('react-hot-loader/patch').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(convertRawToHTML, 'convertRawToHTML', 'src/index.js');
  reactHotLoader.register(convertHTMLToRaw, 'convertHTMLToRaw', 'src/index.js');
  leaveModule(module);
})();

;
//# sourceMappingURL=index.js.map