# a camper leaderboard

## 涉及技术

脚手架使用 `create-react-app`

- react
- fetch    => 请求数据
- bootstrap     => 使用样式 

其中，bootstrap 的样式文件直接写在 `/public/index.html` 中

```html
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
```

## 运行
```
cnpm i    // 安装依赖
npm start // 启动项目
```

## 运用 fetch 获取数据

```js

import 'whatwg-fetch'
import 'es6-promise'

const get = url => {
    let result = fetch(url, {
        headers: {
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    })

    return result;
}

export default get;
```

### 首次加载数据
通过 生命周期函数 `componentWillMount` 设置初始 state

```js
class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: null
        };

        this.handleDatas = this.handleDatas.bind(this);
    }

    componentWillMount() {
        this._setInitData();
    }

    _setInitData() {
        let result = getAll100();
        this._handleResult(result);
    }

    _handleResult(result) {
        result.then(res => {
            return res.json(); // 不要漏写 return
        }).then(datas => {
            this.setState({datas})
        })
    }
    ...
}
```

注意，在处理数据时不要漏写了 return

## 思路
绑定两个 click 事件，根据点击 td 的不同来发起不同的请求，从而改变数据重新排序。
