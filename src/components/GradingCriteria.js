import React from 'react';
import GradingCriteriaItem from '../containers/GradingCriteriaItem';
import {createScore} from '../actions/manageScore';

const GradingCriteria = (props) => {
    let itemId = 1;
    const data = props.loadData.criterias,
    gradingCriteria = data.map((item) => {
        return (
            <GradingCriteriaItem
                score={props.score}
                descriptionToggle={props.descriptionToggle}
                pointData={props.loadData.cols}
                pointDescriptions={item.items}
                title={item.title}
                key={itemId++}
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

export default GradingCriteria;
