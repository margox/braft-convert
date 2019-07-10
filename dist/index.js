"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertRawToEditorState = exports.convertEditorStateToRaw = exports.convertHTMLToEditorState = exports.convertEditorStateToHTML = exports.convertHTMLToRaw = exports.convertRawToHTML = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _configs = require("./configs");

var _draftJs = require("draft-js");

var _draftJsImportHtml = require("draft-js-import-html");

var _draftJsExportHtml = require("draft-js-export-html");

var defaultConvertOptions = {
  fontFamilies: _configs.defaultFontFamilies
};

var convertRawToHTML = exports.convertRawToHTML = function convertRawToHTML(rawContent, options) {
  options = _extends({}, defaultConvertOptions, options);

  try {
    var contentState = (0, _draftJs.convertFromRaw)(rawContent);
    options.contentState = contentState;
    // stateToHTML 方法 可传入自定义函数
    // 传入的 具体方法属性 可看相应的定义
    return (0, _draftJsExportHtml.stateToHTML)(contentState, (0, _configs.getToHTMLConfig)(options));
  } catch (error) {
    console.warn(error);
    return "";
  }
};

var convertHTMLToRaw = exports.convertHTMLToRaw = function convertHTMLToRaw(HTMLString, options, source) {
  options = _extends({}, defaultConvertOptions, options);

  try {
    console.log((0, _configs.getFromHTMLConfig)(options));

    var contentState = (0, _draftJsImportHtml.stateFromHTML)(HTMLString, (0, _configs.getFromHTMLConfig)(options));

    return (0, _draftJs.convertToRaw)(contentState);
  } catch (error) {
    console.warn(error);
    return {};
  }
};

var convertEditorStateToHTML = exports.convertEditorStateToHTML = function convertEditorStateToHTML(editorState, options) {
  options = _extends({}, defaultConvertOptions, options);

  try {
    var contentState = editorState.getCurrentContent();
    options.contentState = contentState;
    return (0, _draftJsExportHtml.stateToHTML)(contentState, (0, _configs.getToHTMLConfig)(options));
  } catch (error) {
    console.warn(error);
    return "";
  }
};

var convertHTMLToEditorState = exports.convertHTMLToEditorState = function convertHTMLToEditorState(HTMLString, editorDecorators, options, source) {
  options = _extends({}, defaultConvertOptions, options);

  try {
    return _draftJs.EditorState.createWithContent((0, _draftJsImportHtml.stateFromHTML)(HTMLString, (0, _configs.getFromHTMLConfig)(options)), editorDecorators);
  } catch (error) {
    console.warn(error);
    return _draftJs.EditorState.createEmpty(editorDecorators);
  }
};

var convertEditorStateToRaw = exports.convertEditorStateToRaw = function convertEditorStateToRaw(editorState) {
  return (0, _draftJs.convertToRaw)(editorState.getCurrentContent());
};

var convertRawToEditorState = exports.convertRawToEditorState = function convertRawToEditorState(rawContent, editorDecorators) {
  try {
    return _draftJs.EditorState.createWithContent((0, _draftJs.convertFromRaw)(rawContent), editorDecorators);
  } catch (error) {
    console.warn(error);
    return _draftJs.EditorState.createEmpty(editorDecorators);
  }
};
//# sourceMappingURL=index.js.map