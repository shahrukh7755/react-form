import React, { Component } from 'react'
import '../component.css'
export default class Form extends Component {

    state = {
        name: "",
        age: '',
        email: '',
        designation: "",
        users: [],
        activeIndex: 0,
        isEditMode: false
    }

    handelEditClick = (user, index) => {
        this.setState({ name: user.name, age: user.age, activeIndex: index, isEditMode: true })
    }

    handelDeleteClick = (index) => {
        let previousUsers = [...this.state.users];
        previousUsers.splice(index, 1)
        this.setState({ users: previousUsers });
    }

    handelSubmit = () => {
        if (this.state.name !== "" && this.state.age !== 0 && this.state.age !== "") {
            let previousUsers = [...this.state.users];
            if (this.state.isEditMode) {
                previousUsers[this.state.activeIndex] = { name: this.state.name, age: this.state.age };
                this.setState({ users: previousUsers, name: '', age: '', activeIndex: 0, isEditMode: false });
            } else {
                previousUsers.push({ name: this.state.name, age: this.state.age });
                this.setState({ users: previousUsers, name: '', age: '' });
            }
        }
        else alert("fileds cannot be blanked")
    }

    handelOnChange = (ev) => {
        console.log("event:", ev.target.id);
        this.setState({ [ev.target.id]: ev.target.value })
    }
    render() {
        console.log("state:", this.state)
        let disabled = this.state.name === "" || this.state.age === 0 || this.state.age === "";

        return (
            <div>
                <div>
                    <input placeholder="name" id="name" onChange={this.handelOnChange} value={this.state.name} className="form-input" />  <br />
                    <input type="number" value={this.state.age} className="form-input" id="age" onChange={this.handelOnChange} placeholder="age" /> <br />
                    <input type="email" className="form-input" id="email" onChange={this.handelOnChange} placeholder="email" /> <br />
                    <input type="text" className="form-input" id="designation" onChange={this.handelOnChange} placeholder="Designation" /> <br />
                    <button onClick={this.handelSubmit} disabled={disabled} style={{ backgroundColor: 'black', borderTop: '2px solid red' }}>{this.state.isEditMode ? 'Update' : 'Add'}  </button>
                    <br />
                    {/* Conditional Rendering */}
                    {this.state.users.length > 0 && <table>
                        <thead>
                            <tr>
                                <th>SNO</th>
                                <th>Name</th>
                                <th>Age</th>
                              
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.users.map((user, index) => {
                                return <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    
                                    <td><button style={{ background: "blue", color: "white" }} onClick={this.handelEditClick.bind(this, user, index)}>Edit</button></td>
                                    <td><button style={{ background: "red", color: "white" }} onClick={this.handelDeleteClick.bind(this, index)}>Delete</button></td>
                                </tr>
                            })}

                        </tbody>
                    </table>}
                </div>
            </div>
        )
    }
}