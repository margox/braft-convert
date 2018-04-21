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

    const draftRawData = '{"blocks":[{"key":"9hu83","text":"Hello World!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":6,"length":5,"style":"BOLD"},{"offset":6,"length":5,"style":"COLOR-F32784"}],"entityRanges":[],"data":{}}],"entityMap":{}}'
    const htmlString = '<p>Hello <strong><span style="color:#f32784">World</span></strong>!</p>'

    console.log(convertRawToHTML(JSON.parse(draftRawData)))
    // <p>Hello <strong><span style="color:#f32784">World</span></strong>!</p>

    console.log(JSON.stringify(convertHTMLToRaw(htmlString)))
    // {"blocks":[{"key":"8v6eh","text":"Hello World!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":6,"length":5,"style":"BOLD"},{"offset":6,"length":5,"style":"COLOR-F32784"}],"entityRanges":[],"data":{}}],"entityMap":{}}

  }

  render() {
    return null
  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))