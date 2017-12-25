import React, { Component } from 'react';
import {func} from 'prop-types';
class FileReaderInput extends Component {
    constructor(props) {
        super(props);
        this.reader = new FileReader();
        this.reader.onload = () => {
            props.onFileUpload(this.reader.result);
        };
        this.reader.onloadstart = () => props.setStatus(true);
        this.reader.onloadend = () => props.setStatus(false);
    }

    render() {
        return <input type='file'
                      className='file-reader'
                      ref={element => this.readerInput = element}
                    onChange={this._onInputChange}/>
    }

    _onInputChange = () => {
        this.readerInput.files[0] && this.reader.readAsBinaryString(this.readerInput.files[0]);
    }
}

FileReaderInput.propTypes = {
    onFileUpload: func,
    setStatus: func
};

export default FileReaderInput;