import React, { Component } from 'react';
import {func} from 'prop-types';
import './file-reader-input.css';

class FileReaderInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileName: ''
        };
        this.reader = new FileReader();
        this.reader.onload = () => {
            props.onFileUpload({sourceFileMapData: this.reader.result, fileName: this.state.fileName});
        };
        this.reader.onloadstart = () => props.setStatus(true);
        this.reader.onloadend = () => props.setStatus(false);
    }

    render() {
        const {loadStatus} = this.props;
        return (
            <label className='file-reader-input-label'>
                <button type='button' onClick={this._onClick} disabled={loadStatus}>Upload</button>
                <input type='file'
                  ref={element => this.readerInput = element}
                onChange={this._onInputChange}/>
            </label>
        )
    }

    _onInputChange = () => {
        const file = this.readerInput.files[0];
        if (file) {
            this.setState(oldState => ({...oldState, fileName: file.name}));
            this.reader.readAsBinaryString(this.readerInput.files[0]);
        }
    };

    _onClick = () => {
        this.readerInput.click();
    };
}

FileReaderInput.propTypes = {
    onFileUpload: func,
    setStatus: func
};

export default FileReaderInput;