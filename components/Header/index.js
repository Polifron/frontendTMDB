import React, {useContext, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Logo from '../../Images/logo.png';

import { Wrapper, Content, LogoImg, HeaderItem, ItemZone } from './Header.styles';

import { Context } from '../../context';


const Header = () => {
  const [user,setUser] = useContext(Context);
  const navigate = useNavigate();
  const handelLogout = ()=>{
     setUser(undefined);
     localStorage.clear();
    navigate('/')
  }
  return(

  <Wrapper>
    <Content>
      <Link to='/'>
        <LogoImg src={Logo} alt='rmdb-logo' />
      </Link>
      {user ? 
      <ItemZone>
        <HeaderItem> Logged in as : {user.name}</HeaderItem>
        <HeaderItem onClick={handelLogout} >Log out</HeaderItem>
        </ItemZone>:
      <ItemZone>
        <HeaderItem as={Link} to='/login'>Login</HeaderItem>
        <HeaderItem as={Link} to='/register'>Register</HeaderItem>
      </ItemZone>

        }
      
  
    </Content>
  </Wrapper>
  )
};

export default Header;