var defaultDataMap = createMap({weak: true})
var namespacesMap = createMap({weak: true, => {}})



export function createDataMap (options = {weak: false}) {
    let map = options.weak ? new WeakMap() : new Map()
    if ('defaultData' in options) {
        defaultDataMap.set(map, options.defaultData())
    }
    return map
}



export function getDataFor (map, object) {
    object = formatIdentifierObject(map, object)

    if (!map.has(object)) {
        map.set(object, defaultDataMap.get(map))
    }

    return map.get(object)
}



export function setDataFor (map, object, data) {
    map.set(formatIdentifierObject(map, object), data)
}



function formatIdentifierObject (map, object) {
    if (typeof object === 'string' && map instanceof WeakMap) {
        let namespaces = dataFor(namespacesMap, map)
        namespaces[object] = namespaces[object] || Symbol()
        object = namespaces[object]
    }

    return object
}
