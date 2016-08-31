import React from 'react';
import PointScaleItem from '../containers/PointScaleItem';
import TotalPointScaleScore from './TotalPointScaleScore';
import PointDescription from './PointDescription';
import { getScore, objToArr } from '../actions/helpers';

const PointScale = (props) => {
    const data = props;
    const zero = 0;
    const scoreArr = objToArr(props.score);
    const pointScaleItem = data.pointData.map((item) => {
       return (
           <PointScaleItem
               gcTitle={props.gcTitle}
               title={item.title}
               points={getScore(item.points, item.colNum, props.col)}
               desc={item.description}
               colNum={item.colNum}
               key={item.colNum}
               pointSelect={props.pointSelect}
               className={'points-available disabled'}
               score={props.score}
           />
       )
    });

    const totalPointItem = scoreArr.map((item) => {
        if (item.title === props.gcTitle) {
            return (
                <TotalPointScaleScore
                    score={item.value}
                    key={item.title}
                />
            )
        }
    });


    return (
        <div>
            <div className="point-scale">
                <PointScaleItem
                    gcTitle={props.gcTitle}
                    colNum={'0'}
                    points={zero}
                    pointSelect={props.pointSelect}
                    className={'points-available'}
                    score={props.score}
                />

                {pointScaleItem}

                {totalPointItem}

            </div>
            <PointDescription/>
        </div>

    )
};

export default PointScale;
