import React, { Component } from 'react'
import '../component.css'
import Table from './Table'
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
        const {name,age,designation,email} =user;
        this.setState({ name,age,designation,email, activeIndex: index, isEditMode: true })
    }

    handelDeleteClick = (index) => {
      
        let previousUsers = [...this.state.users];
        previousUsers.splice(index, 1)
        this.setState({ users: previousUsers });
    }

    handelSubmit = () => {
        const {name,age,designation,email,users,isEditMode,activeIndex}=this.state;
        if (name !== "" && age !== 0 && age !== "") {
            let previousUsers = [...users];
            if (isEditMode) {
                // previousUsers[activeIndex] = { name, age,designation,email };
                // this.setState({ users: previousUsers, name: '', age: '',designation:'',email:"", activeIndex: 0, isEditMode: false });

            } else {
                previousUsers.push({ name, age,designation,email });
                this.setState({ users: previousUsers, name: '', age: '',designation:'',email:""  });
            }
        }
        else alert("fileds cannot be blanked")
    }

    handelOnChange = (ev) =>{
        this.setState({ [ev.target.id]: ev.target.value })
    }
    
    render() {
        const {name,age,designation,email,users,isEditMode}=this.state;
        let disabled = name === "" || age === 0 || age === "";

        return (
            <div>
                <div>
                    <input placeholder="name" id="name" onChange={this.handelOnChange} value={name} className="form-input" />  <br />
                    <input type="number" value={age} className="form-input" id="age" onChange={this.handelOnChange} placeholder="age" /> <br />
                    <input type="email" className="form-input" id="email" value={email} onChange={this.handelOnChange} placeholder="email" /> <br />
                    <input type="text" className="form-input" id="designation" value={designation} onChange={this.handelOnChange} placeholder="Designation" /> <br />
                    <button onClick={this.handelSubmit} disabled={disabled} style={{ backgroundColor: 'black', borderTop: '2px solid red' }}>{isEditMode ? 'Update' : 'Add'}  </button>
                    <br />
                   {users.length > 0 && <Table users={users} onEdit={this.handelEditClick}  onDelete={this.handelDeleteClick} /> }
                </div>
            </div>
        )
    }
}