import React, { useState } from 'react';

const AddTalent = () => {
    const [form, setForm] = useState({
        name: '',
        type: '',
        picture: null,
        video: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setForm({ ...form, [name]: files[0] });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // e.g., send form data to backend or display it
        console.log(form);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Talent Type:
                    <input
                        type="text"
                        name="type"
                        value={form.type}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Picture:
                    <input
                        type="file"
                        name="picture"
                        accept="image/*"
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Video:
                    <input
                        type="file"
                        name="video"
                        accept="video/*"
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <button type="submit">Add Talent</button>
        </form>
    );
};

export default AddTalent;