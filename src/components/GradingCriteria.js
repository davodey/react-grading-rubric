import React from 'react';
import GradingCriteriaItem from './GradingCriteriaItem';

const gradingCriteria = (props) => {

    const data = props.loadData.criterias,
    gradingCriteria = data.map((item) => {

        return (
            <GradingCriteriaItem
                descriptionToggle={props.descriptionToggle}
                pointData={props.loadData.cols}
                pointDescriptions={item.items}
                title={item.title}
                key={item.title}
                desc={item.description}
                numberOfCol={data.length}
            />
        )
    });

    return (
        <div>
            {gradingCriteria}
        </div>
    )
};

export default gradingCriteria;
