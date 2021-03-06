/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";

import LoginModal from './LoginModal';
function RightMenu(props) {
    const user = useSelector(state => state.user)
    const [logModal, setlogModal] = useState(false)
    const onChangeModal = () => {
      setlogModal(!logModal)
    }

    const logoutHandler = () => {
        axios.get(`${USER_SERVER}/logout`).then(response => {
            if (response.status === 200) {
                window.localStorage.clear()
                props.history.push("/login");
            } else {
                alert('Log Out Failed')
            }
        });
    };

    // useEffect(() => {


    // }, [logModal])


    if (user.userData && !user.userData.isAuth) {
        return (
          <>
            <Menu mode={props.mode}>
                <Menu.Item key="mail">
                    <a href="/login">로그인</a>
                </Menu.Item>

                <Menu.Item key="app">
                    <a href="/register">회원가입</a>
                </Menu.Item>
            </Menu>
            </>
        )
    } else {
        return (
            <Menu mode={props.mode}>
                <Menu.Item key="logout">
                    <a onClick={logoutHandler}>로그아웃</a>
                </Menu.Item>
            </Menu>
        )
    }
}

export default withRouter(RightMenu);

