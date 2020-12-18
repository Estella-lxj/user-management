
import SearchBar from './SearchBar';
import UserTable from './UserTable';
import PageBtn from './PageBtn';
import { withRouter, Link } from 'react-router-dom'

const Home = (props) => {

    return (
        <div>
            <h1>Users</h1>
            <SearchBar
                keyword={props.keyword}
                setKeyword={props.setKeyword}
            />
            <UserTable
                users={props.users}
                getUsers={props.getUsers}
                page={props.page}
                deleteUser={props.deleteUser}
                keyword={props.keyword}
                order={props.order}
                setOrder={props.setOrder}
                deleteStatus={props.deleteStatus}
            />
            <PageBtn
                users={props.users}
                goToNextPage={props.goToNextPage}
                goToPrevPage={props.goToPrevPage}
            />
            <Link to="/new" ><button>Create New User</button></Link>
        </div>
    )
}

export default withRouter(Home);