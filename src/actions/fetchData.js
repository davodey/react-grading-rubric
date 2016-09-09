import data from '../data/data.json';

export function fetchData(rubricId) {
    // cycle through data and find the rubric id
    function findRubric(obj, fn) {
        for (var prop in obj) {
            fn(obj[prop]);
        }
    }
    // run the function to find the id, then return it as the data object to use.
    function returnData (id) {
        var rubric = {};
        findRubric(data, function(item) {
            item.map((key) => {
                if (key._id === id) {
                    rubric = key;
                }
            });

        });

        return rubric;
    }

    const rubricData = returnData(rubricId);

    return {
        type: 'FETCH_DATA',
        payload: rubricData
    }
}

// TODO FETCH DATA FROM API
// import axios from 'axios';
// export function fetchData() {
//     const url = `https://rubricservice.dev-prsn.com/rubrics`;
//     const data = axios.get(url);
//     return data;
// }
