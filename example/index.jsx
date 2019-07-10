import React from 'react'
import ReactDOM from 'react-dom'
import { convertRawToHTML, convertHTMLToRaw } from '../src'

// 未完善

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      source: '',
      result: ''
    }
  }

  componentDidMount() {}

  render() {
    const draftRawData =
      '{"blocks":[{"key":"11s4f","text":"Hello World!baidu.com","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":6,"length":5,"style":"BOLD"},{"offset":6,"length":5,"style":"COLOR-F32784"}],"entityRanges":[{"offset":12,"length":9,"key":0}],"data":{}}],"entityMap":{"0":{"type":"LINK","mutability":"MUTABLE","data":{"href":"http://www.baidu.com/","target":""}}}}'
    const htmlString =
      '<p class="helloworld" style="text-indent:12em;text-align:center;">Hello <strong><span style="color:#f32784">World</span></strong>!<a href="http://www.baidu.com" target="_blank">baidu.com</a></p>'
    const htmlString1 = `<span style="color: rgb(0, 0, 0); font-family: sans-serif; font-size: 16.51px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">The<span> </span></span><b style="color: rgb(0, 0, 0); font-family: sans-serif; font-size: 16.51px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial;">Boyer-Moore string search algorithm</b><span style="color: rgb(0, 0, 0); font-family: sans-serif; font-size: 16.51px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"><span> </span>is a particularly efficient<span> </span></span><a href="https://academickids.com/encyclopedia/index.php/String_searching_algorithm" title="String searching algorithm" style="text-decoration: none; color: rgb(90, 118, 150); background: none rgb(255, 255, 255); font-family: sans-serif; font-size: 16.51px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px;">string searching algorithm</a><span style="color: rgb(0, 0, 0); font-family: sans-serif; font-size: 16.51px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">.</span>`
    // <p>Hello <strong><span style="color:#f32784">World</span></strong>!</p>
    const c = convertHTMLToRaw(htmlString)
    console.log(JSON.stringify(c))

    const s = convertRawToHTML(c)
    // {"blocks":[{"key":"8v6eh","text":"Hello World!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":6,"length":5,"style":"BOLD"},{"offset":6,"length":5,"style":"COLOR-F32784"}],"entityRanges":[],"data":{}}],"entityMap":{}}
    const s1 = convertRawToHTML(convertHTMLToRaw(htmlString1))
    return (
      <div className="App">
        复制内容的链接：
        https://academickids.com/encyclopedia/index.php/Boyer-Moore_string_search_algorithm
        <br />
        <br />
        复制的内容转换前：
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
        <br />
        <br />
        复制的内容转换后：
        <div dangerouslySetInnerHTML={{ __html: s }} />
        <hr />
        <br />
        <br />
        复制的内容转换前：
        <div dangerouslySetInnerHTML={{ __html: htmlString1 }} />
        <br />
        <br />
        复制的内容转换后：
        <div dangerouslySetInnerHTML={{ __html: s1 }} />
      </div>
    )
  }
}

ReactDOM.render(<Demo />, document.querySelector('#root'))
