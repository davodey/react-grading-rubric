export function mapArr(arr, fn) {
   return arr.map((item) => {
       return fn(item);
    });
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
            arr.push({title:item.title, value:item.value, quality:item.quality, desc:item.desc, rowNum:item.rowNum});
        }
        return arr;
    });
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

export function hover(event) {
    const current = event.currentTarget;
    if (current.hasAttribute("disabled") !== true) {
        let arr = getPreviousSiblings(current);
        mapArr(arr, function(item){
            item.classList.add('hover');
        })
    }

}

export function unHover(event) {
    const current = event.currentTarget;
    if (current.hasAttribute("disabled") !== true) {
        let arr = getPreviousSiblings(current);
        mapArr(arr, function (item) {
            item.classList.remove('hover');
        })
    }
}

export function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.floor(value * multiplier) / multiplier;
}

export function getPromise(data, fn) {
    return data.then((promise) => {
        return fn(promise);
    });
}