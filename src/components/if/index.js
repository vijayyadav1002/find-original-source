import {bool, element} from 'prop-types'

const If = ({condition = false, children}) => {
    if (condition) {
        return children;
    }
    return null;
};

If.propTypes = {
   condition: bool,
   children: element
};

export default If;