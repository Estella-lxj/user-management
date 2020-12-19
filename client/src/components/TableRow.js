import { withRouter } from 'react-router-dom';

const TableRow = props => {

    const { item, deleteUser, getUsers, page, history, keyword, order } = props;
    const { _id, firstName, lastName, gender, age } = item;

    const handleDelete = (_id) => {
        deleteUser(_id);
        getUsers(page, keyword, order);
    }
    const handleEdit = (_id) => {
        history.push(`/user/${_id}`)
    }

    return (
        <tr>
            <td>
                <button onClick={() => handleEdit(_id)}>
                    Edit</button>
            </td>
            <td>
                <button onClick={() => handleDelete(_id)}>
                    Delete</button>
            </td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{gender}</td>
            <td>{age}</td>
        </tr>
    )
}

export default withRouter(TableRow);