import {mapArr, returnProp} from './helpers';

let arr = [];

// creates object to manage scoring.
export function createScore (data) {
let total = 0;
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
        console.log(item.value);

        if ((typeof(item.value) === 'number') && (item.value !== undefined)) {
            total += item.value;
        }

        console.log(typeof(item.value) === 'number');

    });

    console.log(total);
    let score = Object.assign({}, arr);
    console.log('score', score);
    score.total = {title:'total', value: total, quality:null, desc: null};

    return score;
}

