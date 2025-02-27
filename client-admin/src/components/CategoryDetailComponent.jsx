import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';

class CategoryDetail extends Component {
    static contextType = MyContext;
    constructor(props) {
        super(props);
        this.state = {
            txtID: '',
            txtName: ''
        };
    }
    render() {
        return (
            <div className='float-right'>
                <h2 className='text-center'>CATEGOGY DETAIL</h2>
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td>ID</td>
                                <td><input type="text" value={this.state.txtID} onChange={(e) => {
                                    this.setState({ txtID: e.target.value })
                                }} readOnly={true} /></td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td><input type="text" value={this.state.txtName} onChange={(e) => {
                                    this.setState({ txtName: e.target.value })
                                }} readOnly={true} /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="submit" value="ADD NEW" />
                                    <input type="submit" value="UPDATE" />
                                    <input type="submit" value="DELETE" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
    componentDidUpdate(prevProps) {
        if (this.props.item !== prevProps.item) {
            this.setState({ txtID: this.props.item._id, txtName: this.props.item.name });
        }
    }
}

export default CategoryDetail