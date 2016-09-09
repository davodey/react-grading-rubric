import React from 'react';
import GradingCriteriaItem from '../containers/GradingCriteriaItem';
import {mapArr, returnProp} from '../actions/helpers';

const GradingCriteria = (props) => {
    let itemId = 1;

    const data = props.buildScore,

    gradingCriteria = mapArr(data, function(item){
        return (
            <GradingCriteriaItem
                score={props.score}
                descriptionToggle={props.descriptionToggle}
                description={item.description}
                weight={item.weight}
                pointData={item.values}
                title={item.title}
                key={itemId++}
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
