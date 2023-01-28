import React from 'react';
import './Cart.css';

const Cart = ({ cart, setCart }) => {
    const removeFromCart = (tshirt) => {
        const remaining = cart.filter(ts => ts._id !== tshirt._id);
        setCart(remaining);
    };

    let message;
    if (cart.length === 0) {
        message = <p>Please buy at least one item</p>;
    }
    if (cart.length === 1) {
        message = <h3>Get flat 30% discount till today 12pm</h3>;
    }
    else {
        // message = <p>Thanks For Buying</p>
    }
    return (
        <div>
            <h3 className={cart.length === 2 ? `orange` : `purple`}>Order Summary</h3>
            <h5 className={`bold ${cart.length === 3 ? 'orange' : 'blue'}`}>Order Quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <div className='cart-items'
                    key={tshirt._id}>
                    <div>{tshirt.name}</div>
                    <div>
                        <button onClick={() => removeFromCart(tshirt)}>X</button>
                    </div>
                </div>)
            }
            {
                message
            }
            {
                // cart.length === 3 ? <h4>Enjoy 40% discount just adding another item</h4> : <h4>Enjoy 45% discount just adding another item</h4>
            }
            {/* <p>And Operator</p> */}
            {
                cart.length === 3 && <h2>Akash</h2>
            }

        </div>
    );
};

export default Cart;