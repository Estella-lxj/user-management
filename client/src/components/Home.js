
import SearchBar from './SearchBar';
import UserTable from './UserTable';
import PageBtn from './PageBtn';
import * as actions from '../redux/action-creators';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = (props) => {

    const { users, deleteStatus } = props;

    return (
        <div>
            <div>
                <span >User</span>
                <span>
                    {users.isFetching ? <img style={{ height: "2rem" }} src="img/loader.gif" alt="loader" /> : undefined}
                    {users.error ? <div>Error: {users.error.message}</div> : undefined}
                    {deleteStatus.error ? <div>{deleteStatus.error.message}</div> : undefined}
                </span>
            </div>

            <SearchBar
                keyword={props.keyword}
                setKeyword={props.setKeyword}
            />
            <UserTable
                users={users}
                getUsers={props.getUsers}
                page={props.page}
                keyword={props.keyword}
                order={props.order}
                setOrder={props.setOrder}
                deleteUser={props.deleteUser}
            />
            <PageBtn
                users={props.users}
                goToNextPage={props.goToNextPage}
                goToPrevPage={props.goToPrevPage}
            />
            <Link to="/user/new" ><button>Create New User</button></Link>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users,
        page: state.page,
        keyword: state.keyword,
        order: state.order,
        deleteStatus: state.deleteStatus,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUsers: (page, keyword, order) => dispatch(actions.getUsers(page, keyword, order)),
        goToNextPage: () => dispatch(actions.goToNextPage()),
        goToPrevPage: () => dispatch(actions.goToPrevPage()),
        setKeyword: (text) => dispatch(actions.setKeyword(text)),
        setOrder: (text) => dispatch(actions.setOrder(text)),
        deleteUser: (id, history) => dispatch(actions.deleteUser(id, history)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);