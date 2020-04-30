import React, { Component,Fragment } from 'react'
import { connect } from 'react-redux';
import UnAnswered from '../components/UnAnswered'
import Answered from '../components/Answered'

class Question extends Component {
	render() {
		const { autherUserAnsweres, match } = this.props;
		const id = match.params.id;
		const answered = autherUserAnsweres.hasOwnProperty(id) ? true : false;
		return (
			<Fragment>
				{answered ? <Answered id={id} /> : <UnAnswered id={id} />}
			</Fragment>
		);
	}
}

function mapStateToProps({ authUser, users }) {
	const autherUserAnsweres = users[authUser].answers;
	return {
		autherUserAnsweres
	};
}

export default connect(mapStateToProps)(Question);
