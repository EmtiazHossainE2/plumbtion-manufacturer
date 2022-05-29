import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../components/Loading';
import PageTitle from '../../../components/PageTitle';
import UserList from './UserList';

const AllUsers = () => {
    const { data: users, isLoading,  refetch } = useQuery('user', () => fetch('https://plumbtion-manufacturer.herokuapp.com/user', {
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
            <PageTitle title="All User -"></PageTitle>
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