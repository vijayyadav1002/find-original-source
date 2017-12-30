import React from 'react';
import {func, bool, string} from 'prop-types';
import {FileReaderInput, InputNumber} from '../';

const FormFields  = props => (
    <div className='file-reader-container'>
        <label className='file-reader-field'>
            <span>Working File Name:</span>
            <input type='text'
                   className='file-text'
                   value={props.fileName}
                   onChange={props.onFileNameChange}/>
        </label>
        <label className='file-reader-field'>
            <span>Upload Source Map File:</span>
            <FileReaderInput
                loadStatus={props.loadStatus}
                onFileUpload={props.onFileUpload}
                setStatus={props.setStatus}/>
        </label>
        <label className='number-field'>
            <span>Line Number:</span>
            <InputNumber onChange={props.onUpdateLineNumber}/>
        </label>
        <label className='number-field'>
            <span>Column Number:</span>
            <InputNumber onChange={props.onUpdateColumnNumber}/>
        </label>
    </div>
);

FormFields.propTypes = {
    fileName: string,
    onFileNameChange: func,
    onFileUpload: func,
    setStatus: func,
    loadStatus: bool,
    onUpdateLineNumber: func,
    onUpdateColumnNumber: func
};

export default FormFields;