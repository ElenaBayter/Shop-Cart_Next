import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Link from 'next/link';

export default function Cart() {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);
    const total = cart.reduce((acc, product) => acc + product.price, 0);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cart.map((product, index) => (
                        <li key={index} style={{ margin: '20px 0' }}>
                            <h2>{product.title}</h2>
                            <p>Price: ${product.price}</p>
                            <button onClick={() => removeFromCart(product.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <p>Total: ${total}</p>
            <button onClick={clearCart}>Clear Cart</button>
            <Link legacyBehavior href="/shop">
                <a>Back to Shop</a>
            </Link>
        </div>
    );
}