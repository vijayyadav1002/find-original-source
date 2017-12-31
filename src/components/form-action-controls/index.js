import React, {Component} from 'react';
import {List} from 'immutable';
import {bool, string, func, instanceOf, oneOfType, object, number} from 'prop-types';
import './form-action-controls.css';

class FormActionControls extends Component {

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
                            disabled={this._isSaveDisabled()}
                            onClick={this._save}
                            type='button'>Save
                    </button>
                </div>
            </div>
        );
    }

    _isSaveDisabled = () => (
        !this.props.isSignedIn
        || this.props.loadStatus
        || !this.props.sourceFileMapData
    );

    _save = () => {
        const isNew = typeof this.props.index === 'undefined';
        const sourceCode = {
            sourceFileMapData: this.props.sourceFileMapData,
            fileName: this.props.fileName
        };

        const index = isNew ? this.props.savedSourceCodeList.size : this.props.index;

        isNew ? this.props.insertSourceCode({
            sourceCode
        }) : this.props.updateSourceCode({
            sourceCode,
            index
        });

        this.props.saveCurrentSourceCode({
            currentSourceCode: sourceCode,
            index
        });
    }
}

FormActionControls.propTypes = {
    isSignedIn: bool,
    loadStatus: bool,
    sourceFileMapData: string,
    fileName: string,
    index: oneOfType([object, number]),
    savedSourceCodeList: instanceOf(List),
    insertSourceCode: func,
    updateSourceCode: func
};

export default FormActionControls;