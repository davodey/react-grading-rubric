import React from 'react';
import GradingCriteriaInfo from './GradiingCriteriaInfo';
import PointScale from '../components/PointScale';

const gradingCriteriaItem = (props) => {
    const pointData = props.pointData;
    const pointDesc = props.pointDescriptions;
    console.log('GCITEM', props);
    return (
        <div className="grading-criteria" >

        {/*Load the title and descripton of the Item*/}
            <GradingCriteriaInfo
                descriptionToggle={props.descriptionToggle}
                title={props.title}
                desc={props.desc}
            />
            {/*Load the point scale*/}
            <PointScale pointData={props.pointData} pointDesc={props.pointDescriptions} col={props.numberOfCol}/>
        </div>
    )
};

export default gradingCriteriaItem;

