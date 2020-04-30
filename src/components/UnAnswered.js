import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card,Avatar,Row,Col,Radio,Button } from 'antd'
import { handleSaveQuestionAnswer } from '../store/actions/users'
import ErrorPage from './ErrorPage'

class UnAnswered extends Component {
	state = {
		value:""
	}
	onChange = (e) => {
		this.setState({value: e.target.value,});
	}
	handleSubmit = () => {
		this.props.handleSaveQuestionAnswer(this.props.authUser,this.props.id,this.state.value)
	}
	render() {
		const { question, author } = this.props;
		const { optionOne, optionTwo, id } = question;
		const { name, avatarURL } = author;
		
		if (question === null) {
			return <ErrorPage />;
		}
		return (
            <Card bg="light" title={`${name} asks:`} key={id} style={{width:"500px",margin:"auto"}}>
                <Row>
                    <Col span={12}>
                        <Avatar src={avatarURL} size={64} />
                    </Col>
                    <Col span={12}>
                        <h5>Would you rather...</h5>
						<Radio.Group onChange={this.onChange} value={this.state.value}>
							<Radio value="optionOne">{optionOne.text}</Radio>
							<Radio value="optionTwo">{optionTwo.text}</Radio>
						</Radio.Group>
						<Button onClick={this.handleSubmit}>Submit</Button>
                    </Col>
                </Row>
            </Card>
		);
	}
}

const mapStateToProps=({ authUser,questions, users }, { id }) =>{
	const question = questions[id];

	return {
		authUser,
		question: question ? question : null,
		author: question ? users[question.author] : null
	};
}

export default connect(mapStateToProps,{handleSaveQuestionAnswer})(UnAnswered);