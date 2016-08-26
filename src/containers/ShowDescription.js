import React, { Component } from 'react';

export default class ShowDescription extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pe-checkbox pe-checkbox--small">
                <input type="checkbox" name="Small checkbox" id="chk5" value="" />
                <label htmlFor="chk5">Show Description</label>
            </div>
        )
    }
};
