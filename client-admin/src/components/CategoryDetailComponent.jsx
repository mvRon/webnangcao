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
                                }} readOnly={false} /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="submit" value="ADD NEW" onClick={(e) => this.btnAddClick(e)} />
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

    //event-handlers
    btnAddClick(e) {
        e.preventDefault();
        const name = this.state.txtName;
        if (name) {
            const cate = { name: name };
            this.apiPostCategory(cate)
        } else {
            alert('Please input name')
        }
    }
    //apis
    apiPostCategory(cate) {
        const config = { headers: { 'x-access-token': this.context.token } };
        axios.post('http://localhost:3000/api/admin/categories', cate, config).then((res) => {
            const result = res.data;
            console.log("result: ", result)
            if (result) {
                alert('OK BABY!');
                this.apiGetCategories();
            } else {
                alert('SORRY BABY!');
            }
        })
    }
    apiGetCategories() {
        const config = { headers: { 'x-access-token': this.context.token } };
        axios.get('http://localhost:3000/api/admin/categories', config).then((res) => {
            const result = res.data;
            this.props.updateCategories(result);
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.item !== prevProps.item) {
            this.setState({ txtID: this.props.item._id, txtName: this.props.item.name });
        }
    }
}

export default CategoryDetail