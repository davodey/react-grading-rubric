import React from 'react';
import { hover, unHover } from '../actions/helpers';

const PointScaleItem = (props) => {
    return (
        <button tabIndex="0"
             onMouseLeave={unHover}
             onMouseEnter={hover}
                onFocus={hover}
                onBlur={unHover}
             onClick={() => {props.pointSelect(props.title, props.value, props.score, props.quality, props.description)}}
             className={props.className}>
            <span className="score">{props.colNum}</span>
            <div className="visual-marker rectangle"></div>
        </button>
    )
};
export default PointScaleItem



