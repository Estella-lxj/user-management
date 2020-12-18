import { useEffect } from 'react';
import TableRow from './TableRow';
import { withRouter } from 'react-router-dom';

const UserTable = ({ users, page, getUsers, deleteUser,
    keyword, order, setOrder, deleteStatus }) => {

    useEffect((() => {
        getUsers(page, keyword, order);
    }), [page, keyword, order])

    return (
        <div>
            {users.isFetching ? <div>Loading...</div> : null}
            {users.error ? <div>Error: {users.error.message}</div> : null}
            {deleteStatus.isDeleting ? <div>Deleting...</div> : null}
            {deleteStatus.error ? <div>{deleteStatus.error.message}</div> : null}
            <table>
                <thead>
                    <tr>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>
                            <button
                                onClick={() => setOrder('firstName')}>
                                First Name</button>
                        </th>
                        <th>
                            <button
                                onClick={() => setOrder('lastName')}>
                                Last Name</button>
                        </th>
                        <th>
                            <button
                                onClick={() => setOrder('gender')}>
                                Gender</button>

                        </th>
                        <th><button
                            onClick={() => setOrder('age')}>
                            Age</button>

                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.data.map(({ _id, firstName, lastName, gender, age }) => {
                        return (
                            <TableRow
                                key={_id}
                                id={_id}
                                firstName={firstName}
                                lastName={lastName}
                                gender={gender}
                                age={age}
                                deleteUser={deleteUser}
                                getUsers={getUsers}
                                page={page}
                                keyword={keyword}
                                order={order}
                            />
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default withRouter(UserTable);