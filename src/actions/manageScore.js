import {mapArr, returnProp} from './helpers';
let scores = [];

// manages the score once a point item is selected.
export function createScore (data) {
    function checkSaved(data) {
        if (data.saved.scores !== undefined ) {
            return data.saved.scores;
        } else {
            return data.criterias;
        }
    }

    const dataChecked = checkSaved(data);

let total = Math.floor(0);
    mapArr(dataChecked, function(item) {
        let existingValue = 0;
        let quality: null;
        let desc: null;
        let rowNum: null;
        if (item.value > 0) {
            existingValue = item.value;
            quality = item.quality;
            desc = item.desc;
            rowNum = item.rowNum;

        }
        const criteriaName = item.title;
        const rowNumber = item.rowNum;
        scores.push({title:criteriaName, value: existingValue,  quality: quality, desc: desc, rowNum:rowNumber});

        if ((typeof(item.value) === 'number') && (item.value !== undefined)) {
            total += item.value;
        }

    });

    let savedScore = Object.assign({}, {scores});
    savedScore.total = {title:'total', value: total, quality:null, desc: null};
    savedScore.assignmentId = data.saved.assignmentId;
    savedScore.rubricId = data.saved.rubricId;
    savedScore.sectionId = data.saved.sectionId;
    savedScore.userId = data.saved.userId;

    return savedScore;
}

