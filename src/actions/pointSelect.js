import {mapArr} from './helpers';

export function pointSelect (title, point, score, quality, desc) {
    const scoreCard = score;
    const newScore = {
        title: title,
        value: point,
        quality: quality,
        desc: desc
    };

    scoreCard.total.value = 0;
    console.log('scoreCard', scoreCard);
    mapArr(scoreCard.scores, function(item) {

        if (newScore.title === item.title) {
            item.value = newScore.value;
            item.quality = newScore.quality;
            item.desc = newScore.desc;
        }
        if (item.title !== 'total') {
            scoreCard.total.value += item.value;
        }
    });

    // round total value up
    scoreCard.total.value = Math.ceil(scoreCard.total.value);
    return {
        type: 'POINT_SELECTED',
        payload: {stateScore: scoreCard}
    };
}


