import React, { Component } from 'react';

export default class PointScaleItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div tabIndex="0" className="points-available disabled">
                <span className="score">1</span>
                <div className="visual-marker rectangle"></div>
            </div>
        )
    }
};

