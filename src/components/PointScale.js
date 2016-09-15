import React from 'react';
import PointScaleItem from './PointScaleItem';
import TotalPointScaleScore from './TotalPointScaleScore';
import PointDescription from './PointDescription';
import {objToArr} from '../actions/helpers';


const PointScale = (props) => {
    const data = props.pointData;
    const zero = 0;
    let scoreArr = [];

    // on inital load render points from existing score Array
    // once an item is selected use the state Array
    if (props.stateScore === true) {
        scoreArr = objToArr(props.score.scores);
    } else {
        scoreArr = objToArr(props.stateScore.scores);
    }

    // render the point bars
   const pointScaleItem = scoreArr.map((item) => {
        return data.map((value) => {

            // if the prop disabled is false
            // if the prop role is not a student
            // render editable points
            if (props.options.disabled === false && props.options.userRole !== 'student')  {
                if (item.rowNum === value.row) {
                    if (item.value >= value.points) {
                        return (
                            <PointScaleItem
                                colNum={value.col}
                                description={value.desc}
                                quality={value.title}
                                title={value.cat}
                                className={'points-available'}
                                score={props.score}
                                value={value.points}
                                pointSelect={props.pointSelect}
                                key={value.points}
                                rowNum={value.row}
                            />
                        )
                    } else {
                        return (
                            <PointScaleItem
                                colNum={value.col}
                                description={value.desc}
                                quality={value.title}
                                title={value.cat}
                                className={'points-available disabled'}
                                score={props.score}
                                value={value.points}
                                pointSelect={props.pointSelect}
                                key={value.points}
                                rowNum={value.row}
                            />
                        )
                    }
                }
            }

            // if the prop disabled is true
            // if the prop role is a student
            // render un-editable points
            if (props.options.disabled === true || props.options.userRole === 'student') {
                console.log(props.options.userRole === 'student');
                if (item.rowNum === value.row) {

                    // if the grades have been released show active state on bars
                    if (item.value >= value.points && props.options.gradeRelease === true) {
                        return (
                            <PointScaleItem
                                colNum={value.col}
                                description={value.desc}
                                quality={value.title}
                                title={value.cat}
                                className={'points-available'}
                                score={props.score}
                                value={value.points}
                                pointSelect={props.pointSelect}
                                key={value.points}
                                rowNum={value.row}
                                disabled={true}
                            />
                        )
                    } else {
                        return (
                            <PointScaleItem
                                colNum={value.col}
                                description={value.desc}
                                quality={value.title}
                                title={value.cat}
                                className={'points-available disabled'}
                                score={props.score}
                                value={value.points}
                                pointSelect={props.pointSelect}
                                key={value.points}
                                rowNum={value.row}
                                disabled={true}
                            />
                        )
                    }
                }
            }
        });
   });

    // since the first point bar is not data driven render a static one
    const firstItem = () => {
        // if the prop disabled is false
        // if the prop role is not a student
        // render editable point
        if (props.options.disabled === false && props.options.userRole !== 'student') {
            return (
                <PointScaleItem
                    title={props.cat}
                    description={' '}
                    quality={' '}
                    colNum={'0'}
                    className={'points-available'}
                    score={props.score}
                    value={0}
                    pointSelect={props.pointSelect}
                    rowNum={props.rowNum}
                />
            )
        }

        // if the prop disabled is true
        // if the prop role is a student
        // render un-editable point
        if (props.options.disabled === true || props.options.userRole === 'student') {
            return (
                <PointScaleItem
                    title={props.cat}
                    description={' '}
                    quality={' '}
                    colNum={'0'}
                    className={'points-available'}
                    score={props.score}
                    value={0}
                    pointSelect={props.pointSelect}
                    rowNum={props.rowNum}
                    disabled={true}
                />
            )
        }
    };

    // render the score for the row
    const totalPointItem = scoreArr.map((item) => {

        // if the grade has been released
        // if the prop role is a student
        // render real score
        if (props.options.gradeRelease === true  && props.options.userRole === 'student') {
            if (item.rowNum === props.rowNum) {
                return (
                    <TotalPointScaleScore
                        score={item.value}
                        key={item.title}
                    />
                )
            }
        }

        // if the grade has not been released
        // if the prop role is a student
        // render no score
        if ( props.options.gradeRelease === false && props.options.userRole === 'student') {
            if (item.rowNum === props.rowNum) {
                return (
                    <TotalPointScaleScore
                        score={0}
                        key={item.title}
                    />
                )
            }
        }

        // if the prop role is not a student
        // render real score
        if ( props.options.userRole !== 'student') {
            if (item.rowNum === props.rowNum) {
                return (
                    <TotalPointScaleScore
                        score={item.value}
                        key={item.title}
                    />
                )
            }
        }


    });

    // render the descriptions associated with the score
    const pointDescription = scoreArr.map((item) => {

        // if the grade has been released
        // if the prop role is a student
        // render score description
        if (props.options.gradeRelease === true  && props.options.userRole === 'student') {
            if (item.rowNum === props.rowNum) {
                return (
                    <PointDescription
                        quality={item.quality}
                        desc={item.desc}
                        key={item.title}
                    />
                )
            }
        }

        // if the grade has not been released
        // if the prop role is a student
        // render no description
        if (props.options.gradeRelease === false && props.options.userRole === 'student') {
            // if the grade has not been released hide the row description
            if (item.rowNum === props.rowNum) {
                return (
                    <PointDescription
                        quality={''}
                        desc={''}
                        key={item.title}
                    />
                )
            }
        }

        // if the prop role is not a student
        // render score description
        if ( props.options.userRole !== 'student') {
            if (item.rowNum === props.rowNum) {
                return (
                    <PointDescription
                        quality={item.quality}
                        desc={item.desc}
                        key={item.title}
                    />
                )
            }
        }
    });


    // render
    return (

        <div>
            <div className="point-scale">
                {firstItem()}
                {pointScaleItem}
                {totalPointItem}
            </div>

            {pointDescription}
        </div>

    )
};

export default PointScale;
