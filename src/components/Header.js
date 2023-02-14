import logo from '../image/logo_header.svg';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import CurrentUserContext from '../context/CurrentUserContext';

function Header(props) {
const {clearToken} = props;
const currentUser = React.useContext(CurrentUserContext);

    return (
            <header className="header">
                <img className="header__logo" src={logo} alt="место" name="avatar" />
                <Routes>
                    <Route path='/sing-up' element={<Link className='header__link' to='/sing-in'>Войти</Link>} />
                    <Route path='/sing-in' element={<Link className='header__link' to='/sing-up'>Зарегистрироваться</Link>} />
                    <Route path='/'
                        element={<div className='header__link'>
                            <div>{currentUser.email}</div>
                            <Link to='/sing-in' className='header__link_in' onClick={clearToken}>Выйти</Link>
                        </div>} />
                </Routes>
            </header>
    )
}

export default Header