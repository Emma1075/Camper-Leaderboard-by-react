import React from 'react'
import './User.css'

class User extends React.Component {
    render() {
        let user = this.props.user;
        let fccurl = `https://www.freecodecamp.com/${user.username}`;
        return (
            <tr className="useritem">
                <td>{this.props.num}</td>
                <td className="text-left">
                    <a href={fccurl} target="_blank">
                        <img className="userpic" src={user.img} alt="user img"/>
                        <span>{user.username}</span>
                    </a>
                </td>
                <td>{user.recent}</td>
                <td>{user.alltime}</td>
            </tr>
        );
    }
}

export default User