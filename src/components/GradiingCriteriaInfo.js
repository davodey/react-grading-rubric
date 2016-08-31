import React from 'react';

const GradingCriteriaInfo= (props) => {

    const descToggled = props.descriptionToggle,
    title = props.title,
    description = props.desc;

    if (descToggled === true) {
        return (
            <div>
                <h3 className="pe-title">{title}</h3>
                <p className="pe-copy--small pe-paragraph--last">{description}</p>
            </div>
        )
    } else {
        return (
            <div>
                <h3 className="pe-title">{title}</h3>
            </div>
        )
    }

};

export default GradingCriteriaInfo;