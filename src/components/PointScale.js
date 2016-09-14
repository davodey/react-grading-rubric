import React from 'react';
import PointScaleItem from './PointScaleItem';
import TotalPointScaleScore from './TotalPointScaleScore';
import PointDescription from './PointDescription';
import {objToArr} from '../actions/helpers';

const PointScale = (props) => {
    const data = props.pointData;
    const zero = 0;
    let scoreArr = [];

    // on inital load render points from existing score Array
    // once an item is selected use the state Array
    if (props.stateScore === true) {
        scoreArr = objToArr(props.score.scores);
    } else {
        scoreArr = objToArr(props.stateScore.scores);
    }


    // render the point bars
   const pointScaleItem = scoreArr.map((item) => {
        return data.map((value) => {
            if (item.rowNum === value.row) {
                if (item.value >= value.points) {
                    return (
                        <PointScaleItem
                            colNum={value.col}
                            description={value.desc}
                            quality={value.title}
                            title={value.cat}
                            className={'points-available'}
                            score={props.score}
                            value={value.points}
                            pointSelect={props.pointSelect}
                            key={value.points}
                            rowNum={value.row}
                        />
                    )
                } else {
                    return (
                        <PointScaleItem
                            colNum={value.col}
                            description={value.desc}
                            quality={value.title}
                            title={value.cat}
                            className={'points-available disabled'}
                            score={props.score}
                            value={value.points}
                            pointSelect={props.pointSelect}
                            key={value.points}
                            rowNum={value.row}
                        />
                    )
                }
            }
        });
   });

    // render the score for the row
    const totalPointItem = scoreArr.map((item) => {
        if (item.rowNum === props.rowNum) {
            return (
                <TotalPointScaleScore
                    score={item.value}
                    key={item.title}
                />
            )
        }
    });

    // render the descriptions associated with the score
    const pointDescription = scoreArr.map((item) => {
        if (item.rowNum === props.rowNum)  {
            return (
                <PointDescription
                    quality={item.quality}
                    desc={item.desc}
                    key={item.title}
                />
            )
        }
    });
    console.log('PS', props);
    // render
    return (

        <div>
            <div className="point-scale">
                <PointScaleItem
                    title={props.cat}
                    description={' '}
                    quality={' '}
                    colNum={'0'}
                    className={'points-available'}
                    score={props.score}
                    value={0}
                    pointSelect={props.pointSelect}
                    rowNum={props.rowNum}
                />

                {pointScaleItem}
                {totalPointItem}
            </div>

            {pointDescription}
        </div>

    )
};

export default PointScale;
