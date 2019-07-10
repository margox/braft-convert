import {
  getToHTMLConfig,
  getFromHTMLConfig,
  defaultFontFamilies
} from './configs'

import { convertFromRaw, convertToRaw, EditorState } from 'draft-js'
import { stateFromHTML } from 'draft-js-import-html'
import { stateToHTML } from 'draft-js-export-html'

const defaultConvertOptions = {
  fontFamilies: defaultFontFamilies
}

export const convertRawToHTML = (rawContent, options) => {
  options = { ...defaultConvertOptions, ...options }

  try {
    const contentState = convertFromRaw(rawContent)
    options.contentState = contentState
    // stateToHTML 方法 可传入自定义函数
    // 传入的 具体方法属性 可看相应的定义
    return stateToHTML(contentState, getToHTMLConfig(options))
  } catch (error) {
    console.warn(error)
    return ''
  }
}

export const convertHTMLToRaw = (HTMLString, options, source) => {
  options = { ...defaultConvertOptions, ...options }

  try {
    console.log(getFromHTMLConfig(options))

    const contentState = stateFromHTML(HTMLString, getFromHTMLConfig(options))

    return convertToRaw(contentState)
  } catch (error) {
    console.warn(error)
    return {}
  }
}

export const convertEditorStateToHTML = (editorState, options) => {
  options = { ...defaultConvertOptions, ...options }

  try {
    const contentState = editorState.getCurrentContent()
    options.contentState = contentState
    return stateToHTML(contentState, getToHTMLConfig(options))
  } catch (error) {
    console.warn(error)
    return ''
  }
}

export const convertHTMLToEditorState = (
  HTMLString,
  editorDecorators,
  options,
  source
) => {
  options = { ...defaultConvertOptions, ...options }

  try {
    return EditorState.createWithContent(
      stateFromHTML(HTMLString, getFromHTMLConfig(options)),
      editorDecorators
    )
  } catch (error) {
    console.warn(error)
    return EditorState.createEmpty(editorDecorators)
  }
}

export const convertEditorStateToRaw = editorState => {
  return convertToRaw(editorState.getCurrentContent())
}

export const convertRawToEditorState = (rawContent, editorDecorators) => {
  try {
    return EditorState.createWithContent(
      convertFromRaw(rawContent),
      editorDecorators
    )
  } catch (error) {
    console.warn(error)
    return EditorState.createEmpty(editorDecorators)
  }
}
