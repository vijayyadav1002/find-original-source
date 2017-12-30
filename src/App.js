import React, {Component} from 'react';
import {SourceCodeOutput, FormActionControls, FormFields} from './components';
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
            loadStatus: false,
            fileName: ''
        };
    }

    render() {
        return (
            <div className='App'>
                <h1>Find Original Source Code from Source Map</h1>
                <form onSubmit={this._getOriginalSourceCodeLocation}>
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
                        sourceFileMapData={this.state.sourceFileMapData}
                        loadStatus={this.state.loadStatus}
                    />
                </form>
                <SourceCodeOutput {...this.state.originalPositionInCode}/>
            </div>
        );
    }

    _onFileUploadForSourceMap = ({sourceFileMapData, fileName}) => this.setState(oldState => ({...oldState, sourceFileMapData, fileName}));

    _setLoadStatus = (loadStatus = false) => {
        this.setState(oldState => ({...oldState, loadStatus}));
    };

    _getOriginalSourceCodeLocation = (e) => {
        e.preventDefault();
        if (!this.state.sourceFileMapData) {
            return;
        }
        const sourceCodeMap = SourceMapConsumer(this.state.sourceFileMapData);
        const {lineNumber = 0, columnNumber = 0} = this.state;
        const originalPositionInCode = sourceCodeMap.originalPositionFor({
            line: lineNumber, column: columnNumber
        }) || {};
        this.setState(oldState => ({...oldState, originalPositionInCode}));
    };

    _updateLineNumber = lineNumber => this.setState(oldState => ({...oldState, lineNumber}));

    _updateColumnNumber = columnNumber => this.setState(oldState => ({...oldState, columnNumber}));

    _onFileNameChange = _event => {
        const value = _event.target.value || '';
        this.setState(oldState => ({...oldState, fileName: value }));
    };
}

export default App;
