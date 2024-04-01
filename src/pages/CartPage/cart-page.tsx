import React, { useEffect, useState } from 'react'
import { TProduct } from '../../utils/products';
import { CartList } from '../../components/CartList/cart-list';
import { Col, Layout, Row } from 'antd';
import styles from './cart-page.module.css'
export const CartPage: React.FC = () => {
    const initialCartItem = localStorage.getItem('cartItem');
    const [cartItem, setCartItem] = useState(initialCartItem ? JSON.parse(initialCartItem) : []);
    const [totalAmount, setTotalAmount] = useState(0); // Используйте const вместо let для totalAmount
    const updateTotalAmount = () => {
        const newTotalAmount = cartItem.reduce((total: number, item: { quantity: number; price: number; }) => total + (item.quantity * item.price), 0);
        setTotalAmount(newTotalAmount);
    }
    useEffect(() => {
        updateTotalAmount();
    }, []);

    return (
        <Layout.Content className={styles.pageContent}>
            {cartItem.length > 0 ? (
                <Row >
                    <Col span={18} offset={2}>
                        <h3>Корзина</h3>
                        <div>
                            {cartItem.map((item: TProduct) => {
                                return (
                                    <div key={item.id} >
                                        <CartList item={item} updateTotalAmount={updateTotalAmount} />
                                    </div>
                                )
                            })}
                        </div>
                    </Col>
                    <Col span={2}>
                        <div className={styles.result}>
                            <Row justify='space-between' className={styles.amountInfo}>
                                <Col>
                                    <div className={styles.total}>
                                        ИТОГО
                                    </div>
                                </Col>
                                <Col>
                                    <div className={styles.total}>
                                        {totalAmount} ₽
                                    </div>

                                </Col>
                            </Row>
                            <button className={styles.order}>
                                Перейти к оформлению
                            </button>
                        </div>
                    </Col>
                </Row>
            ) : (
                <div className={styles.emptyCart}>тут пусто</div>
            )}
        </Layout.Content>
    );
};