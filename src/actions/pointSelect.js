import {returnProp} from './helpers';

export function pointSelect (obj, point, score, title) {

    console.log('title', title);

    const scoreCard = score;
    const newScore = {
        title:obj,
        value:point,
        valueTitle: title,
        valueDesc: null
    };


    scoreCard.total.value = 0;
    returnProp(scoreCard, function(item) {
        if (newScore.title === item.title) {
            item.value = newScore.value;
            item.valueTitle = newScore.valueTitle;
            item.valueDesc = newScore.valueDesc;
        }
        if (item.title !== 'total') {
            scoreCard.total.value += item.value;
        }
    });
    return {
        type: 'POINT_SELECTED',
        payload: {stateScore: scoreCard}
    };
}


