import React from 'react';
import SourceCodeListItem from './source-code-list-item';

const SourceCodeList = (props) => (
    <ul>
        {props.savedSourceCodeList.map(
            (item, index) => (
                <SourceCodeListItem
                    {...props}
                    {...item}
                    index={index}
                    key={index}
                />
            )
        )}
    </ul>
);




export default SourceCodeList;