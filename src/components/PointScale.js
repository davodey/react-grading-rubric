import React from 'react';
import PointScaleItem from '../containers/PointScaleItem';
import TotalPointScaleScore from './TotalPointScaleScore';
import PointDescription from './PointDescription';

const PointScale = (props) => {
    const data = props;

    const pointScaleItem = data.pointData.map((item) => {
        console.log(item);
       return (
           <PointScaleItem
               title={item.title}
               points={item.points}
               desc={item.description}
               colNum={item.colNum}
               colLen={props.col}
               key={item.colNum}
           />
       )
    });

    return (
        <div>
            <div className="point-scale">
                <div tabIndex="0" className="points-available">
                    <span className="score">0</span>
                    <div className="visual-marker rectangle"></div>
                </div>

                {pointScaleItem}

               <TotalPointScaleScore/>
            </div>
            <PointDescription/>
        </div>

    )
};

export default PointScale;
