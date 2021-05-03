import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../_actions/user.actions';

function LoginPage() {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });

    const { username, password } = inputs;
    const [submitted, setSubmitted] = useState(false);
    const dispatch = useDispatch();
    const location = useLocation();

    const loggingIn = useSelector(state => state.authentication.loggingIn);

     useEffect(() => { 
        dispatch(userActions.logout()); 
     }, []);
    
    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);

        if (username && password) {
          console.log(username, password)
            // get return url from location state or default to home page
            const { from } = location.state || { from: { pathname: "/home" } };
            dispatch(userActions.login(username, password, from));
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    return (
        <div className="col-lg-8 offset-sm-2">
            <h2>Login</h2>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
                    {submitted && !username &&
                        <div className="invalid-feedback">Username is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                    {submitted && !password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                </div>

                <div className="form-group">
                    <button className="btn btn-primary">
                        {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Login
                    </button>
                    
                </div>
            </form>
        </div>
    )
}

export { LoginPage };