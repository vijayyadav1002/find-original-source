import React, {Component} from 'react';
import SourceCodeList from './source-code-list';
import './manage-source-code.css';

class ManageSourceCode extends Component {

    componentDidMount() {
        this._moveToHome();
    }

    componentDidUpdate() {
        this._moveToHome();
    }

    render() {
        const {savedSourceCodeList} = this.props;
        if (savedSourceCodeList.size === 0) {
            return <div>No Saved Items Found!!</div>
        }
        return <SourceCodeList {...this.props}/>;
    }

    _moveToHome = () => {
        if (!this.props.isSignedIn) {
            this.props.history.push('/');
        }

    }
}

export default ManageSourceCode;