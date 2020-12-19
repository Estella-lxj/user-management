import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserInfoForm from './components/UserInfoForm';


function App(props) {


  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/user/new' component={UserInfoForm} />
        <Route path='/user/:_id' component={UserInfoForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default (App);


