import React, { useState, useEffect } from 'react';

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch user data from authentication service
        fetch('/api/user')
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            {user ? (
                <div>
                    <h2>{user.name}</h2>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Address: {user.address}</p>
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    );
}

export default Profile;
