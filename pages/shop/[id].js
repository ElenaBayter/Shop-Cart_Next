import { useRouter } from 'next/router';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const products = [
    { id: 1, title: 'Product 1', description: 'Description for Product 1', price: 100 },
    { id: 2, title: 'Product 2', description: 'Description for Product 2', price: 150 },
    { id: 3, title: 'Product 3', description: 'Description for Product 3', price: 200 },
];

export async function getStaticPaths() {
    const paths = products.map(product => ({
        params: { id: product.id.toString() },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const product = products.find(p => p.id.toString() === params.id);
    return {
        props: {
            product,
        },
    };
}

export default function Product({ product }) {
    const { addToCart } = useContext(CartContext);
    const router = useRouter();

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button onClick={() => router.push('/shop')}>Back to Shop</button>
        </div>
    );
}