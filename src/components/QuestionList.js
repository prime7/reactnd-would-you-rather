import React, { Fragment } from 'react';
import Question from './Question';

function QuestionsList(props) {
	const { idsList, emptyListNote } = props;
	return (
		<Fragment>
			{idsList.length ? (
				idsList.map((row) => <Question key={row.id} id={row.id} />)
			) : (
				<p className="text-center">{emptyListNote}</p>
			)}
		</Fragment>
	);
}

export default QuestionsList;