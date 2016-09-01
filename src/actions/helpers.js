export function mapArr(arr, fn) {
   return arr.map((item) => {
       return fn(item);
    });
}

export function getScore (a, b, c) {
    var worth = a / b;
    return (worth / c) * b
}


export function returnProp (obj, fn) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            fn(obj[prop]);
        }
    }
    return fn
}

export function objToArr (obj) {
    var arr = [];
    returnProp(obj, function(item) {
        if (item.title !== 'total') {
            arr.push({title:item.title, value:item.value});
        }
        return arr;
    })
    return arr;
}

export function getPreviousSiblings(elem, filter) {
    var sibs = [];
    while (elem = elem.previousSibling) {
        if (elem.nodeType === 3) continue; // text node
        if (!filter || filter(elem)) sibs.push(elem);
    }
    return sibs;
}