import React, { Component } from 'react'
import { Card,CardTitle,CardText,Button } from 'reactstrap'
import logo from '../logo.svg'
import { Select,Avatar } from 'antd'
import {setAuthUser} from '../store/actions/authUser'
import { receiveUsers} from '../store/actions/users'
import { connect } from 'react-redux'
import {Redirect,withRouter} from 'react-router-dom'

const { Option } = Select;

class Login extends Component {
    state = {
        user : ''
    }
    onChange = (value) => {
        this.setState({user:value})
    }
    componentDidMount() {
        this.props.receiveUsers();
    }
    handleSignin = () => {
        this.props.setAuthUser(this.state.user)
        this.props.history.push("/")
    }

    render() {
        if(this.props.authUser){
            return <Redirect to="/"/>
        }
        return (
            <div className="container">
                <Card body className="text-center" style={{maxWidth:"600px",margin:"auto"}}>
                    <CardTitle>Welcome to Would You Rather App</CardTitle>
                    <CardText>Please sign in to continue</CardText>
                    <hr/>
                    <img src={logo} className="App-logo" alt="logo" />
                    <CardText>SignIn</CardText>  
                    <Select
                        size="large"
                        showSearch
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={this.onChange}
                        >
                        {this.props.users.map(user => 
                            <Option key={user.id} value={user.id}><Avatar size={32} src={user.avatarURL}/>{user.name}</Option>
                        )}
                    </Select>
                    <br/>
                    <Button onClick={this.handleSignin}>Sign In</Button>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = ({users,authUser}) => {
    return {
        authUser,
        users: Object.values(users)
    }
}

export default withRouter(connect(mapStateToProps,{setAuthUser,receiveUsers})(Login))