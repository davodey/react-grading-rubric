import {mapArr} from './helpers';
import {saveScore} from './postData';

export function pointSelect (title, point, score, quality, desc, rowNum) {
    const scoreCard = score;
    const newScore = {
        title: title,
        value: point,
        quality: quality,
        desc: desc,
        rowNum: rowNum
    };

    scoreCard.total.value = 0;
    mapArr(scoreCard.scores, function(item) {
        if (newScore.rowNum === item.rowNum) {
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

    saveScore(scoreCard);

    return {
        type: 'POINT_SELECTED',
        payload: {stateScore: scoreCard}
    };
}


