import Link from 'next/link';

const products = [
    { id: 1, title: 'Product 1', description: 'Description for Product 1', price: 100 },
    { id: 2, title: 'Product 2', description: 'Description for Product 2', price: 150 },
    { id: 3, title: 'Product 3', description: 'Description for Product 3', price: 200 },
];

export default function Shop() {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Shop</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id} style={{ margin: '20px 0' }}>
                        <Link legacyBehavior href={`/shop/${product.id}`}>
                            <a style={{textDecoration: 'none'}}>
                                <h2>{product.title}</h2>
                                <p>{product.description}</p>
                                <p>Price: ${product.price}</p>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
            <Link legacyBehavior href="/cart">
                <a>Go to Cart</a>
            </Link>
        </div>
    );
}