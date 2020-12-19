import { useEffect } from 'react';
import TableRow from './TableRow';
import { withRouter } from 'react-router-dom';

const UserTable = props => {

    const { users, getUsers, page, keyword, order, setOrder, deleteUser } = props;

    useEffect((() => {
        getUsers(page, keyword, order);
    }), [page, keyword, order])

    return (
        <div>
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
                    {users.data.map(item => {
                        return (
                            <TableRow
                                key={item._id}
                                item={item}
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