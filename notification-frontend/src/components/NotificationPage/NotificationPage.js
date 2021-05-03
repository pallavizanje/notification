import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { vectors }  from '../../_constants/vector.constants';

function NotificationPage() {
    const [selectedValue, setSelectedValue] = useState(23951);
    const [inputs, setInputs] = useState({
        notification: ''
    });

    const { notification, vector } = inputs;
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleDropDownChange(e) {
        setSelectedValue(e.value);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <Link to="/home">Home</Link>
                <form className="form-inline">
                    <Link className="btn btn-outline-success my-2 my-sm-0" to="/login">Logout</Link>
                </form>
            </nav>

            <h2>Notification Form</h2>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Notification</label>
                    <textarea 
                        type="text"
                        name="notification"
                        value={notification}
                        onChange={handleChange}
                        className={'form-control' + (submitted ? ' is-invalid' : '')}
                    >
                    </textarea>
                    {submitted  &&
                        <div className="invalid-feedback">Notification is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Vector</label>
                    <Select
                        placeholder="Select Option"
                        value={vectors.filter(obj => obj.value === selectedValue)} // set selected value
                        options={vectors} 
                        onChange={handleDropDownChange}
                    />

                    {selectedValue && <div style={{ marginTop: 20, lineHeight: '25px' }}>
                        <div><b>Selected Value: </b> {selectedValue}</div>
                    </div>}
                </div>

                <div className="form-group">
                    <button className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
}

export { NotificationPage }