import React, { Component } from 'react'
import {Card,Avatar,Col,Row} from 'antd'
import { connect } from 'react-redux'
import ErrorPage from './ErrorPage'

class Answered extends Component {
    
    render() {
        const { question, author, authUser,id } = this.props;
        const { optionOne, optionTwo } = question;
        const { name, avatarURL } = author;
        const totalVotes = optionOne.votes.length + optionTwo.votes.length;

        if (question === null) {
			return <ErrorPage />;
		}
        return (
            <Card title={`Asked by ${name}`} key={id} style={{width:"500px",margin:"auto"}}>
                <Row>
                <Col span={12}>
                    <Avatar src={avatarURL} size={64} />
                </Col>
                <Col span={12}>
                    <Row>
                        Results: 
                    </Row>
                    <Row>
                        <Card>
                            <p>Would you rather {optionOne.text}?</p>
                            {optionOne.votes.length} out of {totalVotes}{' '} votes
                            {optionOne.votes.includes(authUser)? <p>You choosed</p>:<></>}
                        </Card>
                    </Row>
                    <Row>
                        <Card>
                            <p>Would you rather {optionTwo.text}?</p>
                            {optionTwo.votes.length} out of {totalVotes}{' '} votes
                            {optionTwo.votes.includes(authUser)? <p>You choosed</p>:<></>}
                        </Card>
                    </Row>
                </Col>
                </Row>
            </Card>
        )
    }
}

function mapStateToProps({ questions, users, authUser }, { id }) {
	const question = questions[id];

	return {
		question: question ? question : null,
		author: question ? users[question.author] : null,
		authUser
	};
}

export default connect(mapStateToProps)(Answered);