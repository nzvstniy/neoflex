import { Link, useNavigate } from 'react-router-dom';
import styles from './header.module.css';
import { Navbar } from '../Navbar/navbar';
import { useShoppingCart } from '../../context/cart-context';
import { Button, Col, Layout, Row } from 'antd';
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
export const HeaderUI: React.FC = () => {
    const navigate = useNavigate()
    const navigateToCart = () => {
        navigate('/cart')
    }
    const navigateToFav = () => {
        navigate('/favourite')
    }
    const navigateToShop = () => {
        navigate('/shop')
    }
    const { cartQuantity } = useShoppingCart()
    console.log(cartQuantity)

    return (
        <Layout.Header style={{ backgroundColor: ' #EAEAEA', padding: 0 }}>
            <div className={styles.navbar}>
                <Row justify='space-around'>
                    <Col className={styles.logo} >
                        <div style={{ cursor: 'pointer', width: 150 }} onClick={navigateToShop}>
                            EShop
                        </div>
                    </Col>
                    <Col className={styles.navigation} >
                        <FaRegHeart onClick={navigateToFav} className={styles.fav} />
                        <div className={styles.cartIcon}>
                            <RiShoppingCartLine onClick={navigateToCart} className={styles.cart} />
                            <div className={styles.cartCount}>
                                {cartQuantity}
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Layout.Header>

    );
}