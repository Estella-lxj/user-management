import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import UserInfoForm from './components/UserInfoForm';


function App() {

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

export default App;


