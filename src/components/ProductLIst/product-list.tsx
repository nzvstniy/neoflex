import useLocalStorageState from "use-local-storage-state";
import { CartProps, TProduct } from "../../utils/products";
import styles from './product-list.module.css'

import { useEffect, useRef, useState } from "react";
import { useShoppingCart } from "../../context/cart-context";
import { Button, Col, Row } from "antd";
import { AiFillStar } from "react-icons/ai";

// const ProductList: React.FC<IProductListProps & { cartItem: TProduct[], setCartItem: (cartItem: TProduct[]) => void }> = ({ products, category, cartItem, setCartItem }) => {
//     useEffect(() => {
//         localStorage.setItem('cartItem', JSON.stringify(cartItem));
//     }, [cartItem]);
//     const addToCart = (product: TProduct) => {
//         setCartItem([...cartItem, product]);
//     };
//     return (
//         <section className={styles.productPage}>
//             <h1>{category}</h1>

//             <div className={styles.container}>
//                 {products.map(product => (
//                     <div className={styles.product} key={product.id}>
//                         <img src={process.env.PUBLIC_URL + product.image} alt={product.title} />
//                         <h3 >{product.title}</h3>
//                         <p >Price: {product.price}</p>
//                         <button onClick={() => addToCart(product)}>Add to Cart</button>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     )
// }



// const ProductList: React.FC<IProductListProps> = ({ products, category, cartItem, setCartItem, }) => {
//     useEffect(() => {
//         localStorage.setItem('cartItem', JSON.stringify(cartItem));
//     }, [cartItem]);

//     const addToCart = (product: TProduct) => {
//         const existingProduct = cartItem.find((item) => item.id === product.id);
//         if (existingProduct) {
//             const updatedCart = cartItem.map((item) =>
//                 item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//             );
//             setCartItem(updatedCart);
//         } else {
//             setCartItem([...cartItem, { ...product, quantity: 1 }]);
//         }
//     };

//     return (
//         <section className={styles.productPage}>
//             <h1>{category}</h1>
//             <div className={styles.container}>
//                 {products.map((product) => (
//                     <div className={styles.product} key={product.id}>
//                         <img src={process.env.PUBLIC_URL + product.image} alt={product.title} />
//                         <h3>{product.title}</h3>
//                         <p>Price: {product.price}</p>
//                         <button onClick={() => addToCart(product)}>Add to Cart</button>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default ProductList;
interface IProductListProps {
    products: TProduct[];
    category: string;
    // cartItem: TProduct[];
    // setCartItem: React.Dispatch<React.SetStateAction<TProduct[]>>;
}
// const ProductList: React.FC<IProductListProps> = ({ products, category }) => {
// const initialCartItem = localStorage.getItem('cartItem');

// const [cartItem, setCartItem] = useState(initialCartItem ? JSON.parse(initialCartItem!) : []);
// useEffect(() => {
//     localStorage.setItem('cartItem', JSON.stringify(cartItem));
// }, [cartItem]);

// const addToCart = (product: TProduct) => {
//     const existingProduct = cartItem.find((item: { id: number; }) => item.id === product.id);
//     if (existingProduct) {
//         const updatedCart = cartItem.map((item: { id: number; quantity: number; }) =>
//             item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//         setCartItem(updatedCart); // Обновление корзины
//     } else {
//         setCartItem([...cartItem, { ...product, quantity: 1 }]); // Добавление нового товара
//     }
// };
const ProductList: React.FC<IProductListProps> = ({ products, category }) => {
    const {
        // getItemQuantity,
        increaseQuantity,
        // decreaseQuantity,
    } = useShoppingCart()
    // {products.map((product) => (
    //     <Row>
    //         <div className={styles.product} key={product.id}>
    //             <img src={process.env.PUBLIC_URL + product.image} alt={product.title} />
    //             <h3>{product.title}</h3>
    //             <p>Price: {product.price}</p>
    //             <button onClick={() => increaseQuantity(product)}>Add to Cart</button>
    //         </div>
    //     </Row>

    // ))}
    return (
        <section className={styles.productPage}>
            <div style={{margin: '20px 0'}}>{category}</div>
            <div className={styles.container}>
                {products.map((product) => (
                    <>
                        <div className={styles.product} key={product.id}>
                            <Row justify="center">
                                <img src={process.env.PUBLIC_URL + product.image} className={styles.image} alt={product.title} />
                            </Row>
                            <Row justify='space-between' className={styles.middleLime}>
                                <Col offset={1}>
                                    <div style={{fontSize: '17px', color:'black', fontWeight:'bold'}}>
                                        {product.title}
                                    </div></Col>
                                <Col span={7}>
                                    <p style={{fontSize: '17px', color:'#FFA542', fontWeight:'bold'}}>{product.price} ₽</p>
                                </Col>
                            </Row>
                            <Row justify='space-between' className={styles.bottomLine}>
                                <Col offset={1}>
                                    <AiFillStar style={{ color: '#FFCE7F', width: 23, height: 21 }} />
                                </Col>
                                <Col pull={6} style={{fontSize: '17px', color:'#838383'}}>
                                    {product.rate}
                                </Col>
                                <Col span={7}>
                                    <Button type="text" style={{fontSize: '17px', color:'black', fontWeight:'bold'}} onClick={() => increaseQuantity(product)}>Купить</Button>
                                </Col>
                            </Row>
                        </div >
                    </>
                ))}

            </div>
        </section >
    );
};
export default ProductList;