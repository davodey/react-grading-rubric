import React, { Component } from 'react';
import { toggleDescription } from '../actions/toggleDescription';
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class ShowDescription extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pe-checkbox pe-checkbox--small">
                <input onChange={this.props.onCheck} type="checkbox" name="Small checkbox" id="chk5" value="" />
                <label htmlFor="chk5">Show Description</label>
            </div>
        )
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({onCheck: toggleDescription}, dispatch)
}

export default connect(null, mapDispatchToProps)(ShowDescription);