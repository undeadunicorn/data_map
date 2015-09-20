# DataMap


## Install

```
npm install burst_data_map
```


## Usage

```javascript
import {createMap, dataFor} from 'burst_data_map'


var myObject = {};


var myMap = createMap({weak: true})
dataFor(myMap, myObject) // -> undefined


var myMap = createMap({weak: true, defaultData: => 'foo'})
dataFor(myMap, myObject) // -> 'foo'


var myMap = createMap({weak: true, defaultData: => 'foo'})
myMap.set(myObject, 'bar') // Native API
dataFor(myMap, myObject) // -> 'bar'


var myMap = createMap({weak: true})
myMap.set('hello', 'world')
dataFor(myMap, 'hello') // -> 'world'
```
