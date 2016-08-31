import React, { Component } from 'react';

export default class PointScaleItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div tabIndex="0" onClick={() => {this.props.pointSelect(this.props.gcTitle, this.props.points, this.props.score)}} className={this.props.className}>
                <span className="score">{this.props.colNum}</span>
                <div className="visual-marker rectangle"></div>
            </div>
        )
    }
};



