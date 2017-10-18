import 'whatwg-fetch'
import 'es6-promise'

const get = url => {
    let result = fetch(url, {
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    })

    return result;
}

export default get;