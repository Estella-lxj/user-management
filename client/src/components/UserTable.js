import { useEffect } from 'react';
import TableRow from './TableRow';
import { withRouter } from 'react-router-dom';
import './UserTable.css';
import { FaSort } from 'react-icons/fa';


const UserTable = props => {

    const { users, getUsers, page, limit, keyword, order, setOrder, deleteUser } = props;

    useEffect((() => {
        getUsers(page, limit, keyword, order);
    }), [page, limit, keyword, order])

    return (
        <div className="table-container">
            <table className="user-table">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>
                            <button
                                onClick={() => setOrder('firstName')}>
                                First Name <FaSort /></button>
                        </th>
                        <th>
                            <button
                                onClick={() => setOrder('lastName')}>
                                Last Name <FaSort /></button>
                        </th>
                        <th>
                            <button
                                onClick={() => setOrder('gender')}>
                                Gender <FaSort /></button>

                        </th>
                        <th><button
                            onClick={() => setOrder('age')}>
                            Age <FaSort /></button>

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
                                limit={limit}
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