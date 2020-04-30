import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './views/Login';
import Home from './views/Home';
import NewQuestion from './views/NewQuestion';
import Leaderboard from './views/Leaderboard';
import Question from './views/Question';
import Header from './components/Header'
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
                {this.props.authUser ===null ? <Login/>:
                <Switch >
                    <Route exact path="/" component={Home} />
                    <Route path="/questions/:id" component={Question} />
                    <Route exact path="/new" component={NewQuestion} />
                    <Route exact path="/leaderboard" component={Leaderboard} />
                    <Route exact path="/login" component={Login}/>
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
export default connect(mapStateToProps,{handleInitialData}) (App);