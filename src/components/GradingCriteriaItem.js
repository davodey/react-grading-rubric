import React from 'react';
import GradingCriteriaInfo from './GradiingCriteriaInfo';
import PointScale from './PointScale';
import PointDescription from './PointDescription';

const gradingCriteriaItem = (props) => {
    return (
        <div className="grading-criteria" >

        {/*Load the title and descripton of the Item*/}
            <GradingCriteriaInfo
                descriptionToggle={props.descriptionToggle}
                title={props.title}
                desc={props.desc}
            />

            {/*Load the point scale*/}
            <PointScale/>
            <PointDescription/>
        </div>
    )
};

export default gradingCriteriaItem;

