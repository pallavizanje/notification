import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userService } from '../../_services/service';

function HomePage() {
    const user = useSelector(state => state.authentication.user);
    console.log(user, 'user');
    const [data, setData] = useState([]);

    useEffect(() => {
        userService.getNotification().then(data => {
            setData(data);
        });
      
    }, []);


    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <Link to="/notification">Notification</Link>
                <form className="form-inline">
                    <Link className="btn btn-outline-success my-2 my-sm-0" to="/login">Logout</Link>
                </form>
            </nav>
          
            <h1>Hi {user.firstName}!</h1>
    
            <h3>{user.id}</h3>
            <table className="table">
                <thead>
                <tr>
                    <th>Sender Id</th>
                    <th>Invite</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody> 
                    {data.filter(id => id.user_id == user.userId)
                        .map((item, index) =>
                            <tr className={item.status === false ? 'table-primary' : 'table-success'} key={index}>
                            <td>{item.sender_id}</td>
                            <td>{item.invite}</td>
                            <td>{item.status == true ? 'Read' : 'Unread'}</td> 
                        </tr>)
                    }
                </tbody>
            </table>          
        </>
    );
}

export { HomePage }