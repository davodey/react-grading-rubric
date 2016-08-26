import React from 'react';
import GradingCriteriaInfo from './GradiingCriteriaInfo';
import PointScale from './PointScale';
import PointDescription from './PointDescription';

const gradingCriteriaItem = (props) => {
    return (
        <div>
            {/*Load the title and descripton of the Item*/}
            <GradingCriteriaInfo descriptionToggle={props.descriptionToggle}/>

            {/*Load the point scale*/}
            <PointScale/>
            <PointDescription/>
        </div>
    )
};

export default gradingCriteriaItem;

