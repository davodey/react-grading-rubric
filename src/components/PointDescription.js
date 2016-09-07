import React from 'react';
const PointDescription = (props) => {
    return (
        <div className="point-description margin-top">
            <div className="pe-label pe-label--bold">{props.title}</div>
            <p className="pe-paragraph--last">{props.text}</p>
        </div>
    )
};
export default PointDescription;





