import React, { Component } from 'react';
import {func} from 'prop-types';
class FileReaderInput extends Component {
    constructor(props) {
        super(props);
        this.reader = new FileReader();
        this.reader.onload = () => {
            props.onFileUpload(this.reader.result);
        }
    }

    render() {
        return <input type='file'
                      ref={element => this.readerInput = element}
                    onChange={this._onInputChange}/>
    }

    _onInputChange = () => {
        this.reader.readAsBinaryString(this.readerInput.files[0]);
    }
}

FileReaderInput.propTypes = {
    onFileUpload: func
};

export default FileReaderInput;