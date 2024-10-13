export const fetchUsers = async () => {
    try {
        const response = await fetch('/api/users');
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error fetching users: ${error.message}`);
    }
};

export const createUser = async (userData) => {
    try {
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        if (!response.ok) {
            throw new Error('Failed to create user');
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error creating user: ${error.message}`);
    }
};