import React, {Component} from 'react';
import {bool, string} from 'prop-types';
import './form-action-controls.css';

class FormActionControls extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='action-items'>
                <div className='control-buttons'>
                    <button className='get-code-button'
                            disabled={this.props.loadStatus}
                            type='submit'>
                        Get Original Code Location
                    </button>
                    <button className='save-button'
                            disabled={this.props.loadStatus || !this.props.sourceFileMapData}
                            onClick={this._save}
                            type='button'>Save
                    </button>
                </div>
            </div>
        );
    }

    _save = () => {
        console.log('saving');
    }
}

FormActionControls.propTypes = {
    loadStatus: bool,
    sourceFileMapData: string
};

export default FormActionControls;