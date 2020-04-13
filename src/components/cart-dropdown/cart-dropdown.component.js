import React from 'react';
import {connect} from 'react-redux';
import './cart-dropdown.styles.scss';
import CustomButton  from '../../components/custom-button/custom-button.component'
import {withRouter} from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import  { toggleCartHidden } from '../../redux/cart/cart.actions'



const CartDropdown =({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {

            cartItems.length ? 

            cartItems.map(cartItem => 
                 <CartItem 
                 key= {cartItem.id}
                 item={cartItem}
                 />
                ) : <span className= 'empty-message'>Your cart is empty</span>
            }

        </div>
        <CustomButton onClick= {() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());

            }}>Go to checkout</CustomButton>
    </div>


);
const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
  });

export default withRouter(connect(mapStateToProps)(CartDropdown));