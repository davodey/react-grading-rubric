import React from 'react';
import PointScaleItem from '../containers/PointScaleItem';
import TotalPointScaleScore from './TotalPointScaleScore';
import PointDescription from './PointDescription';
import { getScore, objToArr, mapArr, getPreviousSiblings } from '../actions/helpers';

const PointScale = (props) => {
    const data = props;
    const zero = 0;
    const scoreArr = objToArr(props.score);

    const pointDesc = props.pointDesc.reverse();
    const added = pointDesc.title
    const pointTitle =  props.pointData;

    console.log(pointTitle);
    console.log(pointDesc);

    function hover(event) {
        const current = event.currentTarget;
        let arr = getPreviousSiblings(current);
        mapArr(arr, function(item){
            item.classList.add('hover');
        })
    }

    function unHover(event) {
        const current = event.currentTarget;
        let arr = getPreviousSiblings(current);
        mapArr(arr, function(item){
            item.classList.remove('hover');
        })
    }

    const pointScaleItem = scoreArr.map((item) => {
        if (item.title === props.gcTitle) {
            return data.pointData.map(function(item2) {
                const convertedPoints = getScore(item2.points, item2.colNum, props.col);
                const selectedPoints = item.value;
                if (selectedPoints >= convertedPoints) {
                    return (
                        <PointScaleItem
                            gcTitle={props.gcTitle}
                            className={'points-available'}
                            colNum={item2.colNum}
                            score={props.score}
                            value={item.value}
                            points={convertedPoints}
                            pointSelect={props.pointSelect}
                            key={item2.colNum}
                            unhover={unHover}
                        />
                    )
                } else {
                    return (
                        <PointScaleItem
                            gcTitle={props.gcTitle}
                            className={'points-available disabled'}
                            colNum={item2.colNum}
                            score={props.score}
                            value={item.value}
                            points={convertedPoints}
                            pointSelect={props.pointSelect}
                            key={item2.colNum}
                            hover={hover}
                            unhover={unHover}

                        />
                    )
                }
            })

        }
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

    const pointDescription = scoreArr.map((item) => {
        if ((item.title === props.gcTitle) && (item.value > 0)) {
            return pointTitle.map((item2) => {
               const convertedPoints = getScore(item2.points, item2.colNum, props.col);
               if (convertedPoints === item.value) {
                    pointDesc.map((item3) => {
                           console.log('ITEM NEEDED', item3);
                           console.log(convertedPoints);
                           console.log(item.value);
                           console.log(props);
                   });


                   return (
                       <PointDescription
                           title={item2.title}
                       />
                   )
               }
            })
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
            {pointDescription}
        </div>

    )
};

export default PointScale;
