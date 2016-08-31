import {hasProp, returnProp} from './helpers';

export function pointSelect (obj, point, score) {
    const newScore = {
        title:obj,
        value:point
    };

    const scoreCard = score;

    scoreCard.total.value = 0;

    returnProp(scoreCard, function(item) {
        if (newScore.title === item.title) {
           item.value = newScore.value;
           //scoreCard.total.value
        }
        console.log(item.value);
        scoreCard.total.value += item.value;
    });

    return {
        type: 'POINT_SELECTED',
        payload: newScore
    };
}

