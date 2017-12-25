import React, {Component} from 'react';
import FileReaderInput from './components/FileReaderInput';
import {SourceMapConsumer} from 'source-map';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sourceFileMapData: '',
            line: 1,
            column: 3418202,
            originalPositionInCode: ''
        };
    }

    render() {
        return (
            <div className='App'>
                <h1>Find Source Code from Minified Version</h1>
                <div className='file-reader-container'>
                    <label className='file-reader-input'>
                        <span>Upload Source Map File:</span>
                        <FileReaderInput onFileUpload={this._onFileUploadForSourceMap}/>
                    </label>
                </div>
                <code>{this.state.originalPositionInCode}</code>
                <button onClick={this._getOriginalSourceCodeLocation}
                        type='button'>Get Code Location</button>
            </div>
        );
    }

    _onFileUploadForSourceMap = sourceFileMapData => this.setState(oldState => ({...oldState, sourceFileMapData}));

    _getOriginalSourceCodeLocation = () => {
        const sourceCodeMap = SourceMapConsumer(this.state.sourceFileMapData);
        const originalPositionInCode = sourceCodeMap.originalPositionFor({line: 1, column: 3418202});
        this.setState(oldState => ({...oldState, originalPositionInCode}));
    }
}

export default App;
