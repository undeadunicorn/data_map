# DataMap

Give default data and easy access to WeakMaps.
Also make WeakMap works with strings.


## Install

```
npm install burst_data_map
```


## Usage

```javascript
import {createDataMap, getDataFor, setDataFor} from 'burst_data_map'


var myObject = {};


var myMap = createDataMap({weak: true})
getDataFor(myMap, myObject) // -> undefined


var myMap = createDataMap({weak: true, defaultData: => 'foo'})
getDataFor(myMap, myObject) // -> 'foo'


var myMap = createDataMap({weak: true, defaultData: => 'foo'})
setDataFor(myMap, myObject, 'bar')
getDataFor(myMap, myObject) // -> 'bar'


var myMap = createDataMap({weak: true})
setDataFor(myMap, 'hello', 'world')
getDataFor(myMap, 'hello') // -> 'world'
```
