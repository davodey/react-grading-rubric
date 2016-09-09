import React, { Component } from 'react';

export default class PointScaleItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
            return (
                <div tabIndex="0" onMouseLeave={this.props.unhover} onMouseEnter={this.props.hover} onClick={() => {this.props.pointSelect(this.props.gcTitle, this.props.points, this.props.score, this.props.valueTitle)}} className={this.props.className}>
                    <span className="score">{this.props.colNum}</span>
                    <div className="visual-marker rectangle"></div>
                </div>
            )


    }
};



