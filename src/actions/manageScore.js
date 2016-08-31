import {mapArr} from './helpers';

let arr = [];
// initinates object to manage scoring.
export function createScore (data) {
    mapArr(data, function(item) {
        const criteriaName = item.title;
        arr.push({title:criteriaName, value: 0})
    });

    let score = Object.assign({}, arr);
    score.total = {title:'total', value: 0};
    return score;
}
