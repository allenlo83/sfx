"use client"; 

import { useState } from 'react';
import { createUser } from '@/lib/api';
import Toast from '@/components/Toast';

export default function UserForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        name: '',
        firstName: '',
        lastName: '',
    });
    const [toast, setToast] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
           ...prevData,
           [name]: value
        }));
    };

    const resetForm = () => {
        setFormData({ 
            username: '', 
            email: '', 
            firstName: '',
            lastName: '',
        });
    }

    const showToast = (message, type) => {
        setToast({ message, type });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUser(formData);
            showToast('User has been registered successfully!', 'success');
            resetForm();
        } catch (error) {
            console.error('Error:', error);
            showToast('An error occurred while registering the user', 'error');
        }
    };

    return (
        <>
            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}
            <form className="max-w-md mx-auto p-4 bg-white rounded shadow" onSubmit={handleSubmit} >
                <h2 className="text-2xl font-bold mb-4">User Registration</h2>

                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                        placeholder="Enter your username"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                        placeholder="Enter your email"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                        placeholder="Enter your first name"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                        placeholder="Enter your last name"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                >
                    Submit
                </button>
            </form>
        </>
    );
}
