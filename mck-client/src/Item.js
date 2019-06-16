import React, { Component, Fragment  } from 'react';
import './Item.css'

class Item extends Component {

    render() {
        const { id, state, payload: { reportType }, payload : {message}  } = this.props.data;
        return (
            <Fragment>
                <div className="row">
                    <div className="content">
                        <div className="id info small">{id}</div>
                        <div className="type info large">{reportType}</div>
                        <div className="state info small">{state}</div>
                        <div className="message info large">{message}</div>
                        <div className="details info small">
                            <a href="">Details</a>
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