import {mapArr, returnProp, round} from './helpers';

// creates and builds the score object, to be used for UI rendering.
export function buildScore (data) {
    const values = data.cols;
    const collection = data.criterias;
    const collectionLength = collection.length;
    let arr = [];
    let buildScoreArr = [];

    function Object(desc, points, title, cat, col) {
        this.desc = desc;
        this.points = round(points, 1);
        this.title = title;
        this.cat = cat;
        this.col = col;
    }

    mapArr(values, function(item) {
        item.pointsConverted = item.points / collectionLength;
    });

    returnProp(collection, function(item) {
        let count = 1;
        let buildArr = [];
        let build;

        arr.push({title: item.title, description: item.description, weight: item.weight, values: values});
            returnProp(item.items.reverse(), function (item3) {
                item3.count = count++;
            });
            mapArr(item.items, function (newItem) {
                newItem.category = item.title;
                mapArr(arr, function (arritem) {
                    mapArr(arritem.values, function (arrvalues) {
                        if ((newItem.category === arritem.title) && (newItem.count === arrvalues.colNum)) {
                            build = new Object(newItem.desc, arrvalues.pointsConverted, arrvalues.title, newItem.category, arrvalues.colNum );
                            buildArr.push(build);
                            return buildArr;
                        }
                    });
                });
            });
        buildScoreArr.push({title: item.title, description: item.description, weight: item.weight, values: buildArr})
    });

   return buildScoreArr;
}
