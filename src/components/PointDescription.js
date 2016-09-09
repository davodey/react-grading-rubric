import React from 'react';

const PointDescription = (props) => {
    return (
        <div className="point-description margin-top">
            <div className="pe-label pe-label--bold">{props.quality}</div>
            <p className="pe-paragraph--last">{props.desc}</p>
        </div>
    )
};
export default PointDescription;





