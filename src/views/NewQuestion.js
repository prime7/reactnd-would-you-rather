import React, { Component } from 'react'
import { Card,CardTitle,CardText,Button,Input } from 'reactstrap'
import {handleSaveQuestion} from '../store/actions/questions'
import { connect } from 'react-redux';
import { Divider } from 'antd';
import {Redirect} from 'react-router-dom'

class NewQuestion extends Component {
    state = {
        qOne: "",
        qTwo: ""
    }
    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
    handleOnSubmit = () => {
        const {qOne,qTwo} = this.state
        const {authUser} = this.props
        this.props.handleSaveQuestion(qOne, qTwo, authUser);

        this.setState({qOne:"",qTwo:""})
    }
    render() {
        const {qOne,qTwo} = this.state
        if(!this.props.authUser){
            return <Redirect to="/login"/>
        }
        return (
            <div className="container">
                <Card body className="text-center" style={{maxWidth:"600px",margin:"auto"}}>
                    <CardTitle>Create New Question</CardTitle>
                    <hr/>
                    <CardText className="text-left">Complete the question: </CardText>
                    <CardText className="text-left">Would you rather... </CardText>
                    <Input type="text" name="qOne" id="q1" value={qOne} onChange={this.handleChange} placeholder="Enter option one text here"/>
                    <Divider>Or</Divider>
                    <Input type="text" name="qTwo" id="q2" value={qTwo} onChange={this.handleChange} placeholder="Enter option Two text here"/><br/>
                    <Button onClick={this.handleOnSubmit}>Submit</Button>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = ({ authUser }) => {
    return {
        authUser
    };
}


export default connect(
    mapStateToProps,
    { handleSaveQuestion }
)(NewQuestion);