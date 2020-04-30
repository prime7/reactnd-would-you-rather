import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import Login from './views/Login';
import Home from './views/Home';
import NewQuestion from './views/NewQuestion';
import Leaderboard from './views/Leaderboard';
import Question from './views/Question';
import Header from './components/Header'
import ErrorPage from './components/ErrorPage'
import 'antd/dist/antd.css';
import './App.css';
import {handleInitialData} from './store/actions/shared'
import { connect } from 'react-redux';

class App extends Component {
    componentDidMount() {
        this.props.handleInitialData();
    }
    
    render() {
        return (
            <Router>
                <Header/>
                <Switch >
                    <PrivateRoute exact path="/" component={Home} />
                    <PrivateRoute path="/questions/:id" component={Question} />
                    <PrivateRoute exact path="/new" component={NewQuestion} />
                    <PrivateRoute exact path="/leaderboard" component={Leaderboard} />
                    <Route exact path="/login" component={Login}/>
                    <Route component={ErrorPage} />
                </Switch>
                }
            </Router>
        )
    }
}
const mapStateToProps = ({authUser}) => {
    return {
        authUser
    }
}
const PrivateRoute = connect(mapStateToProps)(
    ({ component: Component, authUser, ...rest }) => (
      <Route
        {...rest}
        render={props =>
            authUser !== null ? (
            <Component {...props} />
                ) : (
                <Redirect push to="/login" />
            )
        }
      />
    )
  );

export default connect(mapStateToProps,{handleInitialData}) (App);