import {mapArr, returnProp, round} from './helpers';

// creates and builds the score object, to be used for UI rendering.
export function buildScore (data) {
    const values = data.cols;
    const collection = data.criterias;
    const collectionLength = collection.length;
    const buildScoreArr = [];



    function Object(desc, points, title, cat, col, row) {
        this.desc = desc;
        this.points = round(points, 1);
        this.title = title;
        this.cat = cat;
        this.col = col;
        this.row = row
    }

    mapArr(values, function(item) {
        item.pointsConverted = item.points / collectionLength;
    });

    returnProp(collection, function(item) {
        const buildArr = [];
        const arr = [];
        let count = 1;
        let build = {};


        arr.push({title: item.title, description: item.description, weight: item.weight, values: values, rowNum: item.rowNum});
            returnProp(item.items.reverse(), function (item3) {
                item3.count = count++;
            });

            mapArr(item.items, function (newItem) {
                newItem.rowNum = item.rowNum;
                newItem.category = item.title;

                mapArr(arr, function (arritem) {
                    mapArr(arritem.values, function (arrvalues) {
                        if ((newItem.rowNum === arritem.rowNum) && (newItem.count === arrvalues.colNum)) {
                            build = new Object(newItem.desc, arrvalues.pointsConverted, arrvalues.title, newItem.category, arrvalues.colNum, newItem.rowNum );
                            buildArr.push(build);
                            return buildArr;
                        }
                    });
                });
            });

        buildScoreArr.push({title: item.title, description: item.description, weight: item.weight, values: buildArr, rowNum: item.rowNum})
    });

   return buildScoreArr;
}
