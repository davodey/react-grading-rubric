import React from 'react';
import GradingCriteriaItem from './GradingCriteriaItem';

const gradingCriteria = (props) => {
    return (
        <div className="grading-criteria" >
            <GradingCriteriaItem descriptionToggle={props.descriptionToggle}/>
        </div>
    )
};

export default gradingCriteria;
