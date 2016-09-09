import React from 'react';

const PointScaleItem = (props) => {
    return (
        <div tabIndex="0"
             onMouseLeave={props.unhover}
             onMouseEnter={props.hover}
             onClick={() => {props.pointSelect(props.title, props.value, props.score, props.quality, props.description)}}
             className={props.className}>
            <span className="score">{props.colNum}</span>
            <div className="visual-marker rectangle"></div>
        </div>
    )
};
export default PointScaleItem



