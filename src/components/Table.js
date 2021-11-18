import React, { Component } from 'react'

export default class Table extends Component {

    render() {
        const { users } = this.props;
        console.log( Object.entries(users[0]))

        return (
            <table>
                <thead>
                    <tr>
                    <th>SNO</th>

                        {
                         Object.keys(users[0]).map((data, index)=> {
                                return <th key={index} style={{textTransform: "capitalize"}}>{data}</th>
                            })
                        }
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return <tr key={index}>
                            <td>{index + 1}</td>

                            {
                         Object.entries(user).map((data, index)=> {
                                return <td key={index}>{data[1]}</td>
                            })
                        }

                            <td><button style={{ background: "blue", color: "white" }} onClick={this.props.onEdit.bind(this, user, index)}>Edit</button></td>
                            <td><button style={{ background: "red", color: "white" }} onClick={this.props.onDelete.bind(this, index)}>Delete</button></td>
                        </tr>
                    })}

                </tbody>
            </table>
        )
    }
}
