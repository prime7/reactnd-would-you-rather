import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {Card,Row,Col,Avatar,Button} from 'antd';

class Question extends Component {
	render() {
		const { question, author } = this.props;
		const { optionOne, id } = question;
		const { name, avatarURL } = author;
		return (
            <Card bg="light" title={`${name} asks:`} key={id} style={{width:"500px",margin:"auto"}}>
                <Row>
                    <Col span={12}>
                        <Avatar src={avatarURL} size={64} />
                    </Col>
                    <Col span={12}>
                        <h5>{optionOne.text.slice(0, 50)}...?</h5>
                        <Link to={`/questions/${id}`}>
                            <Button type="primary" size="large">View Question</Button>
                        </Link>
                    </Col>
                </Row>
            </Card>
		);
	}
}

function mapStateToProps({ questions, users }, { id }) {
	const question = questions[id];

	return {
		question: question ? question : null,
		author: question ? users[question.author] : null
	};
}

export default connect(mapStateToProps)(Question);