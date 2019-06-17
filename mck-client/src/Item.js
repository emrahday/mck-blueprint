import React, { Component, Fragment  } from 'react';
import './Item.css'

class Item extends Component {

    render() {

        // deconstruct id, state, reportType, message conditionally
        // check test file, even if there is no any payload submitted
        // it can still set default values. 
        const { 
            id, 
            state, 
            payload: { reportType = '' } = { reportType: ''}, 
            payload : { message = '' } = { message: '' }
        } = this.props.data;

        return (
            <Fragment>
                <div className="row">
                    <div className="content">
                        <div className="id info small">{id}</div>
                        <div className="type info large">{reportType}</div>
                        <div className="state info small">{state}</div>
                        <div className="message info large">{message}</div>
                        <div className="details info small">
                            <a href="/">Details</a>
                        </div>
                    </div>
                    <div className="buttons">
                        <button onClick={ () => { this.props.onBlockClick(id) }}>Block</button>
                        <button onClick={ () => { this.props.onResolveClick(id) }}>Resolve</button>
                    </div>
                </div>
            </Fragment>
         );
    }

}

export default Item;