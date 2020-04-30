import React, { Component } from 'react'
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import { Tabs } from 'antd'
import QuestionList from '../components/QuestionList';
const { TabPane } = Tabs;

class Home extends Component {  

    render() {  
        const { answered, unanswered } = this.props.userQuestionData;
        return (
            <div className="container">
                <Tabs defaultActiveKey="1" type="card" size="large" style={{maxWidth:"900px",margin:"auto"}}>
                    <TabPane tab="Unanswered" key="1">
                        <QuestionList
                            idsList={unanswered}
                            emptyListNote="Empty!Create New"
                        />
                    </TabPane>
                    <TabPane tab="Answered" key="2">
                        <QuestionList
                            idsList={answered}
                            emptyListNote="Empty!Create New"
                        />
                    </TabPane>
                </Tabs>              
            </div>
            )
        }
    }

const mapStateToProps = ({authUser,users,questions}) => {
    const answeredIds = Object.keys(users[authUser].answers);
    const answered = Object.values(questions)
        .filter(question => answeredIds.includes(question.id))
        .sort((a, b) => b.timestamp - a.timestamp);
    const unanswered = Object.values(questions)
        .filter(question => !answeredIds.includes(question.id))
        .sort((a, b) => b.timestamp - a.timestamp);

    return {
        userQuestionData: {
            answered,
            unanswered
        }
    };
}

export default withRouter(connect(mapStateToProps)(Home));