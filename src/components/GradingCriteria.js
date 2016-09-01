import React from 'react';
import GradingCriteriaItem from '../containers/GradingCriteriaItem';
import {mapArr, returnProp} from '../actions/helpers';

const GradingCriteria = (props) => {
    let itemId = 1;
    const data = props.loadData.criterias,
    gradingCriteria = mapArr(data, function(item){
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
