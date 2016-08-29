import React from 'react';
import GradingCriteriaItem from './GradingCriteriaItem';

const gradingCriteria = (props) => {
    console.log(props);
    const data = props.loadData.criterias,
    gradingCritera = data.map((item) => {
        return (
            <GradingCriteriaItem
                descriptionToggle={props.descriptionToggle}
                title={item.title}
                key={item.title}
                desc={item.description}
            />
        )
    });

    return (
        <div>
            {gradingCritera}
        </div>
    )
};

export default gradingCriteria;
