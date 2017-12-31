import React from 'react';
import {string, number} from 'prop-types';

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
    column: number,
    line: number,
    name: string,
    source: string
};

export default SourceCodeOutput