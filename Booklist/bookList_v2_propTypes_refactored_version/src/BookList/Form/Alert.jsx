import React, { Component } from 'react';

import PropTypes from 'prop-types'


class Alert extends Component {
    render() {
        const { alert } = this.props;

        return (
            alert != null && (<div className={alert.type}>
                {alert.msg}
            </div>)
        )
    }
}


Alert.propTypes = {
    alert : PropTypes.object,
}

export default Alert
