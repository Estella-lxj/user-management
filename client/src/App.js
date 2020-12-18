import './App.css';
import Home from './components/Home';
import AddNewUser from './components/AddNewUser';
import EditUser from './components/EditUser';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './redux/action-creators'


function App(props) {


  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact render={() =>
          <Home
            users={props.users}
            page={props.page}
            getUsers={props.getUsers}
            goToNextPage={props.goToNextPage}
            goToPrevPage={props.goToPrevPage}
            deleteUser={props.deleteUser}
            keyword={props.keyword}
            setKeyword={props.setKeyword}
            order={props.order}
            setOrder={props.setOrder}
            deleteStatus={props.deleteStatus}
          />
        } />
        <Route path='/new' exact render={() =>
          <AddNewUser
            postUser={props.postUser}
            postStatus={props.postStatus}
          />} />
        <Route path='/edit/:id' exact render={() =>
          <EditUser
            getPrevInfo={props.getPrevInfo}
            userInfo={props.userInfo}
            postUser={props.postUser}
            postStatus={props.postStatus}
          />} />
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    users: state.users,
    page: state.page,
    userInfo: state.userInfo,
    keyword: state.keyword,
    order: state.order,
    postStatus: state.postStatus,
    deleteStatus: state.deleteStatus,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: (page, keyword, order) => dispatch(actions.getUsers(page, keyword, order)),
    goToNextPage: () => dispatch(actions.goToNextPage()),
    goToPrevPage: () => dispatch(actions.goToPrevPage()),
    deleteUser: (id, history) => dispatch(actions.deleteUser(id, history)),
    postUser: (info, history) => dispatch(actions.postUser(info, history)),
    getPrevInfo: (id) => dispatch(actions.getPrevInfo(id)),
    setKeyword: (text) => dispatch(actions.setKeyword(text)),
    setOrder: (text) => dispatch(actions.setOrder(text)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


