import {returnProp} from './helpers';

export function pointSelect (title, point, score, quality, desc) {
    const scoreCard = score;
    const newScore = {
        title: title,
        value: point,
        quality: quality,
        desc: desc
    };

    scoreCard.total.value = 0;
    returnProp(scoreCard, function(item) {
        if (newScore.title === item.title) {
            item.value = newScore.value;
            item.quality = newScore.quality;
            item.desc = newScore.desc;
        }
        if (item.title !== 'total') {

            scoreCard.total.value += Math.round(item.value);
        };
    });
    console.log('scorecard', scoreCard);
    return {
        type: 'POINT_SELECTED',
        payload: {stateScore: scoreCard}
    };
}


