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

  componentDidMount() {

    const draftRawData = '{"blocks":[{"key":"11s4f","text":"Hello World!baidu.com","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":6,"length":5,"style":"BOLD"},{"offset":6,"length":5,"style":"COLOR-F32784"}],"entityRanges":[{"offset":12,"length":9,"key":0}],"data":{}}],"entityMap":{"0":{"type":"LINK","mutability":"MUTABLE","data":{"href":"http://www.baidu.com/","target":""}}}}'
    const htmlString = '<p class="helloworld" style="text-indent:12em;text-align:center;">Hello <strong><span style="color:#f32784">World</span></strong>!<a href="http://www.baidu.com">baidu.com</a></p>'

    console.log(convertRawToHTML(JSON.parse(draftRawData)))
    // <p>Hello <strong><span style="color:#f32784">World</span></strong>!</p>

    console.log(JSON.stringify(convertHTMLToRaw(htmlString)))
    console.log(convertRawToHTML(convertHTMLToRaw(htmlString)))
    // {"blocks":[{"key":"8v6eh","text":"Hello World!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":6,"length":5,"style":"BOLD"},{"offset":6,"length":5,"style":"COLOR-F32784"}],"entityRanges":[],"data":{}}],"entityMap":{}}

  }

  render() {
    return null
  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))