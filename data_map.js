var defaultDataMap = createMap({weak: true})
var namespacesMap = createMap({weak: true, => {}})


function createMap (options = {weak: false}) {
    let map = options.weak ? new WeakMap() : new Map()
    if ('defaultData' in options) {
        defaultDataMap.set(map, options.defaultData())
    }
    return map
}


function dataFor (map, object) {

    if (typeof object === 'string' && map instanceof WeakMap) {
        let namespaces = dataFor(namespacesMap, map)
        namespaces[object] = namespaces[object] || Symbol()
        object = namespaces[object]
    }

    if (!map.has(object)) {
        map.set(object, defaultDataMap.get(map))
    }

    return map.get(object)
}
