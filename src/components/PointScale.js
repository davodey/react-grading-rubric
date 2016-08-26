import React from 'react';
import PointScaleItem from '../containers/PointScaleItem';
import TotalPointScaleScore from './TotalPointScaleScore';

const PointScale = (props) => {
    return (
        <div className="point-scale">
            <div tabIndex="0" className="points-available">
                <span className="score">0</span>
                <div className="visual-marker rectangle"></div>
            </div>
           <PointScaleItem/>
           <TotalPointScaleScore/>

        </div>

    )
};

export default PointScale;
