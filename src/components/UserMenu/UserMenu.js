import React, { useEffect } from 'react';
import { MenuOptionElement, MenuOptions, UserMenuStyled, WelcomeTitle, Shadow } from './UserMenuElements';
import { auth } from '../../firebase/firebase.utils2';
import { signOut } from 'firebase/auth';
import * as userActions from '../../redux/user/user-actions';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as cartActions from '../../redux/cart/cart-actions';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const UserMenu = ({ user }) => {
  const { hiddenMenu } = useSelector(state => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleToggle = () => {
    dispatch(userActions.toggleMenuHidden());
    dispatch(cartActions.cartHidden());

  };
  const logout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  };
  return (
    <>
      {!hiddenMenu && <Shadow onClick={handleToggle} />}
      {
        !hiddenMenu ? (<UserMenuStyled data-aos='fade-right' >
          <WelcomeTitle >Hola {user.displayName.toUpperCase()}</WelcomeTitle>
          <MenuOptions>
            <Link to='/mis-ordenes' onClick={handleToggle}>
              <MenuOptionElement >Mís ordenes</MenuOptionElement>
            </Link>
            <MenuOptionElement onClick={logout}>Cerrar Sesión</MenuOptionElement>
          </MenuOptions>
        </UserMenuStyled>) : null
      }
    </>

  );
};
