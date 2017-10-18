import get from './get'

const getLatest30 = () => {
    return get('http://fcctop100.herokuapp.com/api/fccusers/top/recent');
}

const getAll100 = () => {
    return get('http://fcctop100.herokuapp.com/api/fccusers/top/alltime');
}

export {
    getLatest30,
    getAll100
}
