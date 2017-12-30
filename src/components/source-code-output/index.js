import React from 'react';
import {string} from 'prop-types';

const SourceCodeOutput = ({column = '', line = '', name = '', source = ''}) => (
    <div className='results'>
        <div>Source Code Details:</div>
        <div>{`Column: ${column}`}</div>
        <div>{`Line: ${line}`}</div>
        <div>{`name: ${name}`}</div>
        <div>{`source file: ${source}`}</div>
    </div>
);

SourceCodeOutput.propTypes = {
    column: string,
    line: string,
    name: string,
    source: string
};

export default SourceCodeOutput