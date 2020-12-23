import { withRouter } from 'react-router-dom';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

const TableRow = props => {

    const { item, deleteUser, page, limit, history, keyword, order } = props;
    const { _id, firstName, lastName, gender, age } = item;

    const handleDelete = (_id) => {
        deleteUser(_id, page, limit, keyword, order);
    }
    const handleEdit = (_id) => {
        history.push(`/user/${_id}`)
    }

    return (
        <tr>
            <td>
                <button onClick={() => handleEdit(_id)}>
                    <FiEdit2 /></button>
            </td>
            <td>
                <button onClick={() => handleDelete(_id)}>
                    <FiTrash2 /></button>
            </td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{gender}</td>
            <td>{age}</td>
        </tr>
    )
}

export default withRouter(TableRow);