import React, {Component} from 'react';

class SourceCodeListItem extends Component {

    render() {
        const {index, fileName} = this.props;
        return (
            <li>
                <div className='source-code-item-container'>
                    <div className='source-code-item-index'>{index}</div>
                    <div className='source-code-item-name'>{fileName}</div>
                    <div className='source-code-item-controls'>
                        <button type='button' className='source-code-item-button select' onClick={this._onSelect}>Select/Edit</button>
                        <button type='button' className='source-code-item-button delete' onClick={this._onDelete}>Delete</button>
                    </div>
                </div>
            </li>
        );
    }

    _onSelect = () => {
        this.props.saveCurrentSourceCode({
            currentSourceCode: {
                fileName: this.props.fileName,
                sourceFileMapData: this.props.sourceFileMapData
            },
            index: this.props.index
        });
        this.props.history.push('/');
    };

    _onDelete = () => {
        const {index, currentIndex, deleteSourceCode, clearCurrentSourceCode} = this.props;
        deleteSourceCode({index});
        console.log(currentIndex);
        if (currentIndex === index) {
            clearCurrentSourceCode();
        }
    };
}

export default SourceCodeListItem;