import { withRouter } from 'react-router-dom';

const TableRow = ({ id, firstName, lastName, gender, age,
    deleteUser, getUsers, page, history, keyword, order }) => {

    const handleDelete = (id) => {
        deleteUser(id);
        getUsers(page, keyword, order);
    }

    const handleEdit = (id) => {
        history.push(`/edit/${id}`)
    }
    return (
        <tr>
            <td>
                <button onClick={() => handleEdit(id)}>
                    Edit
                    </button>
            </td>
            <td>
                <button onClick={() => handleDelete(id)}>
                    Delete
                    </button>
            </td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{gender}</td>
            <td>{age}</td>
        </tr>
    )
}

export default withRouter(TableRow);