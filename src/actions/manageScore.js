import {mapArr, returnProp} from './helpers';


// manages the score once a point item is selected.
export function createScore (data) {
    let scores = [];

    function checkSaved(data) {
        if ((data.saved.scores !== undefined ) && (data._id === data.saved.rubricId)) {
            return data.saved.scores;
        } else {
            return data.criterias;
        }
    }

    const dataChecked = checkSaved(data);
    let total = Math.floor(0);

    mapArr(dataChecked, function(item) {
        let existingValue = 0;
        let quality: '';
        let desc: '';
        let rowNum: '';
        if (item.value > 0) {
            existingValue = item.value;
            quality = item.quality;
            desc = item.desc;
            rowNum = item.rowNum;

        }

        scores.push({title:item.title, value: existingValue,  quality: quality, desc: desc, rowNum:item.rowNum});

        if ((typeof(item.value) === 'number') && (item.value !== undefined)) {
            total += item.value;
        }

    });

    const savedScore = Object.assign({}, {scores});
    savedScore.total = {title:'total', value: total, quality:null, desc: null};
    savedScore.assignmentId = data.saved.assignmentId;
    savedScore.rubricId = data.saved.rubricId;
    savedScore.sectionId = data.saved.sectionId;
    savedScore.userId = data.saved.userId;
    return savedScore;
}

