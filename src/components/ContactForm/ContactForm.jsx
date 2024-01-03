// import PropTypes from 'prop-types';
import React, { useState } from 'react';

import css from './ContactForm.module.css';

const ContactForm = ({onSubmit}) => {
    const [data, setData] = useState({
        name: '',
        number: '',
    });

    const handleChange = evt => {
        const { name, value } = evt.currentTarget;
        setData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        onSubmit(data);
        setData({
            name: '',
            number: ''
        })
    };

    const { name, number } = data;

    return (
            <form  className={css.formcontact} onSubmit={handleSubmit}>
                <label >
                    <div >
                        Name 
                    </div>
                    <input
                        className={css.inputform}
                        type="text"
                        name="name"
                        value={name}
                        required
                        onChange={handleChange}
                    />
                </label>
                <label >
                    <div >
                        Number 
                    </div>
                    <input
                        className={css.inputform}
                        type="tel"
                        name="number"
                        value={number}
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
                        title="The phone number in the form 000-00-00."
                        required
                        onChange={handleChange}
                    />
                </label>
                <button className={css.button}>Add contact</button>
            </form>
        );
        
}

// ContactForm.propTypes = {
//     onSubmit: PropTypes.func.isRequired
// };

export default ContactForm;