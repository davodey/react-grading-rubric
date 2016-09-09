import React from 'react';
import PointScaleItem from './PointScaleItem';
import TotalPointScaleScore from './TotalPointScaleScore';
import PointDescription from './PointDescription';
import { getScore, objToArr, mapArr, getPreviousSiblings } from '../actions/helpers';

const PointScale = (props) => {
    const data = props.pointData;
    const zero = 0;
    let scoreArr;

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

    // on inital load render points from score Array
    // once an item is selected use the state Array
    if (props.stateScore === true) {
        scoreArr = objToArr(props.score);
    } else {
        scoreArr = objToArr(props.stateScore);
    }

   const pointScaleItem = scoreArr.map((item) => {
        return data.map((value) => {
            if (item.title === value.cat) {
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
                            hover={hover}
                            unhover={unHover}
                            key={value.points}
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
                            hover={hover}
                            unhover={unHover}
                            key={value.points}
                        />
                    )
                }
            }
        });
   });




    const totalPointItem = scoreArr.map((item) => {
        if (item.title === props.cat) {
            return (
                <TotalPointScaleScore
                    score={item.value}
                    key={item.title}
                />
            )
        }
    });

    const pointDescription = scoreArr.map((item) => {
        if (item.title === props.cat)  {
            return (
                <PointDescription
                    quality={item.quality}
                    desc={item.desc}
                    key={item.title}
                />
            )
        }
    });

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
                    hover={hover}
                    unhover={unHover}
                />

                {pointScaleItem}
                {totalPointItem}
            </div>

            {pointDescription}
        </div>

    )
};

export default PointScale;
