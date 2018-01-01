import React, {Component} from 'react';
import {func, bool} from 'prop-types';
import {Map} from 'immutable';
import {SourceCodeOutput, FormFields, If} from './components';
import {FormActionControls} from './connect';
import {SourceMapConsumer} from 'source-map';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        const currentSourceCode = props.currentSourceCode || Map({});
        this.state = {
            sourceFileMapData: currentSourceCode.get('sourceFileMapData') || '',
            originalPositionInCode: {},
            loadStatus: false,
            fileName: currentSourceCode.get('fileName') || '',
            showError: false
        };
    }

    render() {
        return (
            <div className='App'>
                <h1>Find Original Source Code from Source Map</h1>
                <form onSubmit={this._getOriginalSourceCodeLocation}>
                    <If condition={this.state.showError}>
                        <h6 style={{color: 'red', textAlign: 'center'}}>Please fill in the correct details</h6>
                    </If>
                    <FormFields
                        fileName={this.state.fileName}
                        loadStatus={this.state.loadStatus}
                        onFileNameChange={this._onFileNameChange}
                        onFileUpload={this._onFileUploadForSourceMap}
                        onUpdateLineNumber={this._updateLineNumber}
                        onUpdateColumnNumber={this._updateColumnNumber}
                        setStatus={this._setLoadStatus}
                    />
                    <FormActionControls
                        fileName={this.state.fileName}
                        sourceFileMapData={this.state.sourceFileMapData}
                        loadStatus={this.state.loadStatus}
                    />
                </form>
                <SourceCodeOutput {...this.state.originalPositionInCode}/>
            </div>
        );
    }

    _onFileUploadForSourceMap = ({sourceFileMapData, fileName}) => {
        this.props.clearCurrentSourceCode();
        this.setState(oldState => ({...oldState, sourceFileMapData, fileName, showError: false}))
    };

    _setLoadStatus = (loadStatus = false) => {
        this.setState(oldState => ({...oldState, loadStatus, showError: false}));
    };

    _getOriginalSourceCodeLocation = (e) => {
        e.preventDefault();
        if (!this.state.sourceFileMapData) {
            return;
        }
        const sourceCodeMap = SourceMapConsumer(this.state.sourceFileMapData);
        const {lineNumber, columnNumber} = this.state;
        if (isNaN(lineNumber)  || isNaN(columnNumber)) {
            this.setState(oldState => ({...oldState, showError: true}));
            console.log('showErrorState');
            return;
        }
        const originalPositionInCode = sourceCodeMap.originalPositionFor({
            line: lineNumber, column: columnNumber
        }) || {};
        this.setState(oldState => ({...oldState, originalPositionInCode, showError: false}));
    };

    _updateLineNumber = lineNumber => this.setState(oldState => ({...oldState, lineNumber, showError: false}));

    _updateColumnNumber = columnNumber => this.setState(oldState => ({...oldState, columnNumber, showError: false}));

    _onFileNameChange = _event => {
        const value = _event.target.value || '';
        const showError = !value;
        this.setState(oldState => ({...oldState, fileName: value, showError}));
    };
}

App.propTypes = {
    isSignedIn: bool,
    setSignedIn: func,
    clearCurrentSourceCode: func
};

export default App;
