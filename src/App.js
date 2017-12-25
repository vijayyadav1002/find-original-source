import React, {Component} from 'react';
import {FileReaderInput, InputNumber} from './components';
import {SourceMapConsumer} from 'source-map';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sourceFileMapData: '',
            lineNumber: 0,
            originalPositionInCode: {},
            columnNumber: 0,
            loadStatus: false
        };
    }

    render() {
        const {column = '', line = '', name = '', source = ''} = this.state.originalPositionInCode;
        return (
            <div className='App'>
                <h1>Find Original Source Code from Source Map</h1>
                <form onSubmit={this._getOriginalSourceCodeLocation}>
                    <div className='file-reader-container'>
                        <label className='file-reader-field'>
                            <span>Upload Source Map File:</span>
                            <FileReaderInput
                                onFileUpload={this._onFileUploadForSourceMap}
                                setStatus={this._setLoadStatus}/>
                        </label>
                        <label className='number-field'>
                            <span>Line Number:</span>
                            <InputNumber onChange={this._updateLineNumber}/>
                        </label>
                        <label className='number-field'>
                            <span>Column Number:</span>
                            <InputNumber onChange={this._updateColumnNumber}/>
                        </label>
                    </div>
                        <div className='action-items'>
                            <button className='get-code-button'
                                    disabled={this.state.loadStatus}
                                    type='submit'>Get Original Code Location</button>
                        </div>
                </form>
                <div className='results'>
                    <div>Source Code Details:</div>
                    <div>{`Column: ${column}`}</div>
                    <div>{`Line: ${line}`}</div>
                    <div>{`name: ${name}`}</div>
                    <div>{`source file: ${source}`}</div>
                </div>
            </div>
        );
    }

    _onFileUploadForSourceMap = sourceFileMapData => this.setState(oldState => ({...oldState, sourceFileMapData}));

    _setLoadStatus = (loadStatus = false) => {
        this.setState(oldState => ({...oldState, loadStatus}));
    };

    _getOriginalSourceCodeLocation = (e) => {
        e.preventDefault();
        const sourceCodeMap = SourceMapConsumer(this.state.sourceFileMapData);
        const {lineNumber = 0, columnNumber = 0} = this.state;
        const originalPositionInCode = sourceCodeMap.originalPositionFor({
            line: lineNumber, column: columnNumber
        }) || {};
        this.setState(oldState => ({...oldState, originalPositionInCode}));
    };

    _updateLineNumber = lineNumber => this.setState(oldState => ({...oldState, lineNumber}));

    _updateColumnNumber = columnNumber => this.setState(oldState => ({...oldState, columnNumber}));
}

export default App;
