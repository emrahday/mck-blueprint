import React, { Component, Fragment  } from "react";
import Item from "./Item";
import api from "./api";

class List extends Component {

    constructor(props){
        super(props);
        this.state = {
            elements: [],
            error: ""
        }
    }
    
    componentDidMount() {
        this.getReport();
    }

    async getReport(){
        try {
            const elements = await api.getReportList();
            this.setState({
                elements
            });
        } catch (error) {
            this.setState({
                error: 'Unexpected error while fetching report :( Please check API is running properly'
            });
        }
    }

    async onBlock(id) {
        try {
            const result = await api.blockElement(id);
            if (result.id === id){
                this.removeElementFromView(id);
            } 
        } catch (error) {
            this.setState({
                error: 'Unexpected error while blocking item :( Please check API is running properly'
            });
        }
    }
    
    async onResolve(id) {
        try {
            const result = await api.resolveElement(id);
            if (result.id === id){
                this.removeElementFromView(id);
            }
        } catch (error) {
            this.setState({
                error: 'Unexpected error while resolving item :( Please check API is running properly'
            });
        }
    }

    removeElementFromView(id){
        const elements = this.state.elements.filter( item => item.id !== id);
        this.setState({
            elements
        });
    }

    render() {
        return (
            <Fragment>
                <h2>Reports</h2>
                <div className="error">{this.state.error}</div>
                {this.state.elements.map( item => (
                    <Item 
                        key={ item.id } 
                        data={ item }
                        onBlockClick={ id => this.onBlock(id)}
                        onResolveClick={ id => this.onResolve(id)}
                    />
                ))}
            </Fragment>
         );
    }
}

export default List;