import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import "./CartPage.css";

const CartPage = ({ items, onAddOne, onRemoveOne }) => {
  if (items.length === 0) {
    return (
      <div>Your cart is empty. Why not add some expensive products to it?</div>
    );
  }

  const itemCount = items.reduce((sum, item) => {
    return sum + item.count;
  }, 0);
  const itemTotal = items
    .reduce((sum, item) => {
      return sum + item.count * item.price;
    }, 0)
    .toFixed(2);

  return (
    <div>
      <ul className='CartPage-items'>
        {items.map((item) => {
          return (
            <li key={item.id} className='CartPage-item'>
              <Item item={item}>
                <div className='CartItem-controls'>
                  <button
                    className='CartItem-removeOne'
                    onClick={() => onRemoveOne(item)}
                  >
                    &ndash;
                  </button>
                  <span className='CartItem-count'>{item.count}</span>
                  <button
                    className='CartItem-addOne'
                    onClick={() => onAddOne(item)}
                  >
                    +
                  </button>
                </div>
              </Item>
            </li>
          );
        })}
      </ul>
      Total: ${itemTotal} - {itemCount} {itemCount === 1 ? "item" : "items"}
    </div>
  );
};

CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired,
};

export default CartPage;
