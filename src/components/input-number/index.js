import React, { Component } from 'react';
import {func} from 'prop-types';

class InputNumber extends Component {
    render() {
        return <input type='number' onChange={this._onInputChange} className='input-number'/>
    }

    _onInputChange = event => {
        const value = parseInt(event.target.value, 10);
        this.props.onChange(value);
    }
}

InputNumber.propTypes = {
    onChange: func
};

export default InputNumber;