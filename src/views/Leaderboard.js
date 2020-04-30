import React, { Component } from 'react'
import { connect } from 'react-redux';
import { List, Avatar, Card, Row, Col } from 'antd';

class Leaderboard extends Component {
    render() {
        const { leaderboardData } = this.props;
        return (
            <div className="container" style={{maxWidth:"600px"}}>
                <List
                    size="large"
                    itemLayout="vertical"
                    bordered
                    dataSource={leaderboardData}
                    renderItem={item => (
                        <List.Item>
                            <Row>
                            <Col span={8}>
                                <Avatar size={64} src={item.avatarURL}/>
                            </Col>
                            <Col span={8}>
                                <Card>
                                    <Row>{item.name}</Row>
                                    <Row>Answered {item.answerCount}</Row>
                                    <hr/>
                                    <Row>Created {item.questionCount}</Row>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card>
                                    <Row>Score</Row>
                                    <hr/>
                                    <Row>{item.total}</Row>
                                </Card>
                            </Col>
                            </Row>
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}


const mapStateToProps = ({ users }) => {
    const leaderboardData = Object.values(users)
        .map(user => ({
            id: user.id,
            name: user.name,
            avatarURL: user.avatarURL,
            answerCount: Object.values(user.answers).length,
            questionCount: user.questions.length,
            total: Object.values(user.answers).length + user.questions.length
        }))
        .sort((a, b) => a.total - b.total)
        .reverse()
        .slice(0, 3);
    return {
        leaderboardData
    };
}

export default connect(mapStateToProps)(Leaderboard);