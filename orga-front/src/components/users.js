



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Users = () => {
//     const [users, setUsers] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 10;
//     const [roleToUpdate, setRoleToUpdate] = useState(null);
//     const [selectedUserId, setSelectedUserId] = useState(null);

//     useEffect(() => {
//         const token = sessionStorage.getItem('token');
//         if (token) {
//             axios.get('http://localhost:5002/api/users/', {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             })
//             .then(response => {
//                 console.log('API response:', response.data);
//                 setUsers(Array.isArray(response.data) ? response.data : []);
//             })
//             .catch(error => console.error('Error fetching users:', error));
//         }
//     }, []);

//     const changeUserRole = async (userId, newRole) => {
//         try {
//             const token = sessionStorage.getItem('token');
//             const response = await axios.put(
//                 `http://localhost:5002/api/users/${userId}/role`,
//                 { role: newRole },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                         'Content-Type': 'application/json'
//                     }
//                 }
//             );
//             console.log('User role updated successfully', response.data);
//             setUsers(prevUsers => 
//                 prevUsers.map(user => 
//                     user._id === userId ? { ...user, role: newRole } : user
//                 )
//             );
//             setSelectedUserId(null);
//             setRoleToUpdate(null);
//         } catch (error) {
//             console.error('Error updating user role:', error.response ? error.response.data : error.message);
//         }
//     };

//     // Pagination functions
//     const nextPage = () => {
//         if (currentPage * itemsPerPage < users.length) {
//             setCurrentPage(currentPage + 1);
//         }
//     };

//     const previousPage = () => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage - 1);
//         }
//     };

//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const selectedUsers = users.slice(startIndex, startIndex + itemsPerPage);

//     return (
//         <div>
//             <h1>Users</h1>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Email</th>
//                         <th>Role</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {selectedUsers.map(user => (
//                         <tr key={user._id}>
//                             <td>{user._id}</td>
//                             <td>{user.email}</td>
//                             <td>
//                                 {selectedUserId === user._id ? (
//                                     <select
//                                         value={roleToUpdate || user.role}
//                                         onChange={(e) => setRoleToUpdate(e.target.value)}
//                                     >
//                                         <option value="user">User</option>
//                                         <option value="admin">Admin</option>
//                                     </select>
//                                 ) : (
//                                     user.role
//                                 )}
//                             </td>
//                             <td>
//                                 {selectedUserId === user._id ? (
//                                     <>
//                                         <button onClick={() => changeUserRole(user._id, roleToUpdate)}>Save</button>
//                                         <button onClick={() => {
//                                             setSelectedUserId(null);
//                                             setRoleToUpdate(null);
//                                         }}>Cancel</button>
//                                     </>
//                                 ) : (
//                                     <button onClick={() => {
//                                         setSelectedUserId(user._id);
//                                         setRoleToUpdate(user.role);
//                                     }}>Edit Role</button>
//                                 )}
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <div>
//                 <button onClick={previousPage} disabled={currentPage === 1}>Previous</button>
//                 <button onClick={nextPage} disabled={currentPage * itemsPerPage >= users.length}>Next</button>
//             </div>
//         </div>
//     );
// };

// export default Users;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [roleToUpdate, setRoleToUpdate] = useState(null);
    const [selectedUserId, setSelectedUserId] = useState(null);

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            axios.get('http://localhost:5002/api/users/', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                console.log('API response:', response.data);
                setUsers(Array.isArray(response.data) ? response.data : []);
            })
            .catch(error => console.error('Error fetching users:', error));
        }
    }, []);

    // const changeUserRole = async (userId, newRole) => {
    //     try {
    //         const token = sessionStorage.getItem('token');
    //         const response = await axios.put(
    //             `http://localhost:5002/api/users/${userId}/role`,
    //             { role: newRole },
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`,
    //                     'Content-Type': 'application/json'
    //                 }
    //             }
    //         );
    //         console.log('User role updated successfully', response.data);
    //         setUsers(prevUsers => 
    //             prevUsers.map(user => 
    //                 user._id === userId ? { ...user, role: newRole } : user
    //             )
    //         );
    //         setSelectedUserId(null);
    //         setRoleToUpdate(null);
    //     } catch (error) {
    //         console.error('Error updating user role:', error.response ? error.response.data : error.message);
    //         alert('Failed to update user role. Please try again.');
    //     }
    // };
    const changeUserRole = async (userId, newRole) => {
        try {
            const token = sessionStorage.getItem('token');
            const response = await axios.put(
                `http://localhost:5002/api/users/update-role/${userId}`, // Correct endpoint
                { role: newRole },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
            console.log('User role updated successfully', response.data);
            setUsers(prevUsers => 
                prevUsers.map(user => 
                    user._id === userId ? { ...user, role: newRole } : user
                )
            );
            setSelectedUserId(null);
            setRoleToUpdate(null);
        } catch (error) {
            console.error('Error updating user role:', error.response ? error.response.data : error.message);
            alert('Failed to update user role. Please try again.');
        }
    };
    
    // Pagination functions
    const nextPage = () => {
        if (currentPage * itemsPerPage < users.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedUsers = users.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div>
            {/* <h1>Users</h1> */}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedUsers.map(user => (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.email}</td>
                            <td>
                                {selectedUserId === user._id ? (
                                    <select
                                        value={roleToUpdate || user.role}
                                        onChange={(e) => setRoleToUpdate(e.target.value)}
                                    >
                                        <option value="user">User</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                ) : (
                                    user.role
                                )}
                            </td>
                            <td>
                                {selectedUserId === user._id ? (
                                    <>
                                        <button onClick={() => changeUserRole(user._id, roleToUpdate)}>Save</button>
                                        <button onClick={() => {
                                            setSelectedUserId(null);
                                            setRoleToUpdate(null);
                                        }}>Cancel</button>
                                    </>
                                ) : (
                                    <button onClick={() => {
                                        setSelectedUserId(user._id);
                                        setRoleToUpdate(user.role);
                                    }}>Edit Role</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button onClick={previousPage} disabled={currentPage === 1}>Previous</button>
                <button onClick={nextPage} disabled={currentPage * itemsPerPage >= users.length}>Next</button>
            </div>
        </div>
    );
};

export default Users;

