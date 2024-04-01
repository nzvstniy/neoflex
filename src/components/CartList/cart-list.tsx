import { Col, Row } from "antd"
import { useShoppingCart } from "../../context/cart-context"
import { TProduct } from "../../utils/products"
import styles from './cart-list.module.css'
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
type TCartItemProps = {
    item: TProduct;
    updateTotalAmount: any
}
export const CartList = ({ item, updateTotalAmount }: TCartItemProps & { updateTotalAmount: () => void }) => {
    let [itemQuantity, setItemQuantity] = useState(item.quantity)
    itemQuantity = item.quantity;
    const [isDeleted, setIsDeleted] = useState(false);
    useEffect(() => {
        if (isDeleted) {
            setItemQuantity(0);
        }
    }, [isDeleted]);
    const {
        increaseQuantity,
        decreaseQuantity,
        deleteFromLocalStorage
    } = useShoppingCart()
    const handleDecrease = () => {
        if (itemQuantity > 1) {
            decreaseQuantity(item);
            setItemQuantity(itemQuantity - 1);
            updateTotalAmount();
        }
    };
    const handleIncrease = () => {
        increaseQuantity(item);
        setItemQuantity(itemQuantity + 1);
        updateTotalAmount();
    };
    if (!item || isDeleted) return null;
    if (!item) return null;
    const productAmount = item.quantity * item.price;
    const handleDeleteFromLocalStorage = () => {
        deleteFromLocalStorage(item);
        // setItemQuantity(itemQuantity = 0)
        updateTotalAmount()
        setIsDeleted(true);
    };
    return (
        <section>
            <div key={item.id} className={styles.cart}>
                <Row align='middle' justify='start'>
                    <Col>
                        <img src={process.env.PUBLIC_URL + item.image} alt={item.title} />
                    </Col>

                    <Col>
                        <div className={styles.title}>
                            {item.title}
                        </div>
                        <div className={styles.price}>
                            {item.price} ₽
                        </div>
                    </Col>
                </Row>
                <FaRegTrashAlt onClick={() => {
                    setItemQuantity(item.quantity=0)
                    handleDeleteFromLocalStorage()
                }} className={styles.trashIcon} />
                <Row justify='space-between' className={styles.bottomLine}>
                    <Col>
                        <Row>
                            <Col>
                                <AiFillMinusCircle
                                    className={styles.changeQuantity}
                                    onClick={() => {
                                        setItemQuantity(item.quantity--)
                                        handleDecrease()
                                    }}
                                    style={{ pointerEvents: itemQuantity === 1 ? 'none' : 'auto', opacity: itemQuantity === 1 ? 0.5 : 1 }}
                                />
                            </Col>
                            <Col>
                                <div className={styles.quantity} >
                                    {itemQuantity}
                                </div>
                            </Col>
                            <Col>
                                <AiFillPlusCircle
                                    className={styles.changeQuantity}
                                    onClick={() => {
                                        setItemQuantity(item.quantity++)
                                        handleIncrease()
                                    }} />
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <h3>{productAmount} ₽</h3>
                    </Col>
                </Row>
            </div>
        </section>
    );
}
