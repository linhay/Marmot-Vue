import mt from './mt'

mt.location = {}

mt.location.fetch = function(cb) {
    Native.post('mt://location/fetch',cb)
}

mt.location.startUpdates = function(cb) {
    let url = 'mt://location/startUpdates'
    Native.post(url,{ listenToken: url },cb)
}

mt.location.stopUpdates = function(cb) {
    Native.post('mt://location/stopUpdates',cb)
}

mt.location.select = function(cb) {
    Native.post('mt://location/select',cb)
}

export default mt
