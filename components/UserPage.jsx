'use client';

import { useState, useEffect } from 'react';
import { fetchUsers } from '@/lib/api';

const User = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const data = await fetchUsers();
                setUsers(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        loadUsers();
    }, []);

    if (loading) return <div className="container mx-auto flex justify-center items-center">Loading...</div>;
    if (error) return <div className="container mx-auto justify-center items-center">Error: {error}</div>;

    return (
        <div className="container mx-auto mt-8">
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Username</th>
                        <th className="py-2 px-4 border-b">Email</th>
                        <th className="py-2 px-4 border-b">First Name</th>
                        <th className="py-2 px-4 border-b">Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td className="py-2 px-4 border-b text-center">{user.username}</td>
                            <td className="py-2 px-4 border-b text-center">{user.email}</td>
                            <td className="py-2 px-4 border-b text-center">{user.firstName}</td>
                            <td className="py-2 px-4 border-b text-center">{user.lastName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default User;