
import SearchBar from './SearchBar';
import UserTable from './UserTable';
import PageBtn from './PageBtn';
import * as actions from '../redux/action-creators';
import { connect } from 'react-redux';
import './Home.css';


const Home = (props) => {

    const { users, deleteStatus } = props;

    return (
        <div className="home-page-container">
            <div className="home-page-header">
                <h1 >USERS</h1>
                {users.isFetching ? <img src="img/loader.gif" alt="loader" /> : undefined}
            </div>
            <div>
                <SearchBar
                    keyword={props.keyword}
                    setKeyword={props.setKeyword}
                />
                <UserTable
                    users={users}
                    getUsers={props.getUsers}
                    page={props.page}
                    limit={props.limit}
                    keyword={props.keyword}
                    order={props.order}
                    setOrder={props.setOrder}
                    deleteUser={props.deleteUser}
                />
                <PageBtn
                    users={props.users}
                    limit={props.limit}
                    setLimit={props.setLimit}
                    goToNextPage={props.goToNextPage}
                    goToPrevPage={props.goToPrevPage}
                />

                {users.error ? <div>Error: {users.error.message}</div> : undefined}
                <p className="mark">© 2020 - Developed with ❤️ Estella</p>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users,
        page: state.page,
        limit: state.limit,
        keyword: state.keyword,
        order: state.order,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUsers: (page, limit, keyword, order) => dispatch(actions.getUsers(page, limit, keyword, order)),
        goToNextPage: () => dispatch(actions.goToNextPage()),
        goToPrevPage: () => dispatch(actions.goToPrevPage()),
        setKeyword: (text) => dispatch(actions.setKeyword(text)),
        setOrder: (text) => dispatch(actions.setOrder(text)),
        setLimit: (num) => dispatch(actions.setLimit(num)),
        deleteUser: (_id, page, limit, keyword, order) => dispatch(actions.deleteUser(_id, page, limit, keyword, order)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);