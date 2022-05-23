import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../components/Loading';
import UserList from './UserList';

const AllUsers = () => {
    const { data: users, isLoading, error, refetch } = useQuery('user', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
    })
        .then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='md:p-4'>
            <h2 className=' text-xl py-5'>All Users {users.length}</h2>
            <div className="overflow-x-auto ">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Role</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserList
                                key={index}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></UserList>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;