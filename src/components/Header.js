import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavbarText,
    NavItem
} from 'reactstrap';
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux';
import { Button, Avatar } from 'antd';
import {setAuthUser} from '../store/actions/authUser'

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const handleClick = () => {
        props.setAuthUser(null)
    }

    return (
        <div className="mb-2">
            <Navbar color="light" light expand="md">
                <div className="container">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="mr-4">
                            <NavLink to="/">Home</NavLink>
                        </NavItem>
                        <NavItem className="mr-4">
                            <NavLink to="/new">New Question </NavLink>
                        </NavItem>
                        <NavItem className="mr-4">
                            <NavLink to="/leaderboard">Leader Board </NavLink>
                        </NavItem>
                    </Nav>
                    {!props.authUser &&
                        <NavbarText>
                            <NavLink to="/login">Login</NavLink>
                        </NavbarText>
                    }
                    {props.authUser &&
                        <>
                        <h4 className="ml-2">Welcome </h4>
                        <Avatar className="ml-2" src={props.users[props.authUser].avatarURL} size={32}></Avatar>
                        </>
                    }
                    {props.authUser &&
                        <Button className="ml-2" onClick={handleClick}>Logout</Button>
                    }
                </Collapse>
                </div>
            </Navbar>
        </div>
    );
}
const mapStateToProps = ({authUser,users}) => {
    return {
        authUser,
        users
    }
}
export default connect(mapStateToProps,{setAuthUser}) (Header);