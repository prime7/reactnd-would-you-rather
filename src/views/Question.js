import React, { Component,Fragment } from 'react'
import { connect } from 'react-redux';
import UnAnswered from '../components/UnAnswered'
import Answered from '../components/Answered'
import ErrorPage from '../components/ErrorPage'
import {Redirect} from 'react-router-dom'

class Question extends Component {
	render() {
		const { autherUserAnsweres, match,questions } = this.props;
		const id = match.params.id;
		const question = questions[id]
		if(!question){
			return <Redirect to="/404"/>
		}
		const answered = autherUserAnsweres.hasOwnProperty(id) ? true : false;
		return (
			<Fragment>
				{answered ? <Answered id={id} /> : <UnAnswered id={id} />}
			</Fragment>
		);
	}
}

function mapStateToProps({ authUser, users,questions }) {
	const autherUserAnsweres = users[authUser].answers;
	return {
		autherUserAnsweres,
		questions
	};
}

export default connect(mapStateToProps)(Question);
