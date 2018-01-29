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
    const rawData = {"blocks":[{"key":"5qndi","text":"asdasdasdasdasdd","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"fjr11","text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":0}],"data":{}},{"key":"ahdd4","text":"hello world!","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{"0":{"type":"IMAGE","mutability":"IMMUTABLE","data":{"url":"https://margox.cn/wp-content/uploads/2017/09/QQ20180118-110249@2x-980x458.png","name":"未命名项目","type":"IMAGE"}}}}
    const HTMLData = '<pre><code>asdasdasdasdasdd</code></pre><div class="media-wrap image-wrap"><img src="https://margox.cn/wp-content/uploads/2017/09/QQ20180118-110249@2x-980x458.png"/></div><p>hello world!</p>'
    console.log(convertRawToHTML(rawData))
  }

  render() {
    return null
  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))