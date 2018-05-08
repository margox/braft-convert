import { convertToHTML, convertFromHTML } from 'draft-convert'
import { getToHTMLConfig, getFromHTMLConfig, defaultFontFamilies } from './configs'
import { convertFromRaw, convertToRaw } from 'draft-js'

export const convertRawToHTML = (content, fontFamilies = defaultFontFamilies) => {
  try {
    const contentState = convertFromRaw(content)
    return convertToHTML(getToHTMLConfig({ contentState, fontFamilies }))(contentState)
  } catch (error) {
    console.warn(error)
    return ''
  }
}

export const convertHTMLToRaw = (content) => {
  try {
    const contentState = convertFromHTML(getFromHTMLConfig())(content)
    return convertToRaw(contentState)
  } catch (error) {
    console.warn(error)
    return {}
  }
}