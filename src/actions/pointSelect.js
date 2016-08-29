export function pointSelect (points, numRows, numCols) {
    const point = points;
    const numOfRows = numRows;
    const numOfCriteria = numCols;
    const individualPointWorth = point / numOfRows;
    const scaledPointWorth = individualPointWorth / numCols;
    const totalPointWorth = scaledPointWorth * numOfRows;

    console.log(totalPointWorth);

    return {
        type: 'POINT_SELECTED',
        payload: totalPointWorth
    };
}


