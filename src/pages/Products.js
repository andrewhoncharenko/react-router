import { Link } from "react-router-dom";

const PRODUCTS = [
    {id: "p1", title: "Product 1"},
    {id: "p2", title: "Product 2"},
    {id: "p3", title: "Product 3"}
];

function ProductsPage() {
    return <>
        <h2>The products page</h2>
        <ul>
            {PRODUCTS.map((product) => <li key={`/products/${product.id}`}><Link to={product.id}>{product.title}</Link></li>)}
        </ul>
    </>;
}

export default ProductsPage;