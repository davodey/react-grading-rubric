import React from 'react';
import PointScaleItem from '../containers/PointScaleItem';
import TotalPointScaleScore from './TotalPointScaleScore';
import PointDescription from './PointDescription';
import { getScore } from '../actions/helpers';

const PointScale = (props) => {
    const data = props;
    const zero = 0;

    const pointScaleItem = data.pointData.map((item) => {
       return (
           <PointScaleItem
               gcTitle={props.gcTitle}
               title={item.title}
               points={getScore(item.points, item.colNum, props.col)}
               desc={item.description}
               colNum={item.colNum}
               key={item.colNum}
               pointSelect={props.pointSelect}
               className={'points-available disabled'}
               score={props.score}
           />
       )
    });

    return (

        <div>
            <div className="point-scale">
                <PointScaleItem
                    gcTitle={props.gcTitle}
                    colNum={'0'}
                    points={zero}
                    pointSelect={props.pointSelect}
                    className={'points-available'}
                    score={props.score}
                />

                {pointScaleItem}

               <TotalPointScaleScore/>
            </div>
            <PointDescription/>
        </div>

    )
};

export default PointScale;
