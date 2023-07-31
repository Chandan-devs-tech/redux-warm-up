import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
// import { clearCart } from "../features/cart/cartSlice";
import { openModal } from '../features/modal/modalSlice';

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      {/* <div>
        {cartItems.map((item) => <CartItem key={item.id} {...item} />)}
      </div> */}
      <div>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            img={item.img}
            amount={item.amount}

          />
        ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total
            {' '}
            <span>
              $
              {total.toFixed(2)}
            </span>
          </h4>
        </div>
        <button
          type="button"
          className="btn clear-btn"
          onClick={() => dispatch(openModal())}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
