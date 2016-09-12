import {mapArr, returnProp} from './helpers';

let arr = [];

// creates object to manage scoring.
export function createScore (data) {
let total = Math.floor(0);
    mapArr(data, function(item) {
        let existingValue = 0;
        let quality: null;
        let desc: null;

        if (item.value > 0) {
            existingValue = item.value;
            quality = item.quality;
            desc = item.desc;

        }
        const criteriaName = item.title;
        arr.push({title:criteriaName, value: existingValue,  quality: quality, desc: desc});


        if ((typeof(item.value) === 'number') && (item.value !== undefined)) {
            total += item.value;
        }

    });

    let score = Object.assign({}, arr);
    score.total = {title:'total', value: total, quality:null, desc: null};

    return score;
}

