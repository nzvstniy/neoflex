
import { useNavigate } from 'react-router-dom';
import styles from './footer.module.css';
import { Layout, Row, Col } from 'antd';
import { CiGlobe } from "react-icons/ci";
import { PiTelegramLogoLight } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa6";
import { SlSocialVkontakte } from "react-icons/sl";

const FooterUI = () => {
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
    return (
        <Layout.Footer style={{ width: 1140, height: 149, backgroundColor: '#FFFFFF', alignSelf: 'center', marginTop: 20, borderRadius: '30px 30px 0 0' }} >
            <Row justify="space-between">
                <Col className={styles.logo}>
                    <div style={{ cursor: 'pointer', width: 150 }} onClick={navigateToShop}>
                        EShop
                    </div>
                </Col>
                <Col >
                    <Row className={styles.secondColumn} onClick={navigateToFav}>
                        Избранное
                    </Row >
                    <Row className={styles.secondColumn} onClick={navigateToCart}>Корзина</Row>
                    <Row className={styles.secondColumn}>Контакты</Row>
                </Col>
                <Col>
                    <Row className={styles.thirdColumn}>Условия сервиса</Row>
                    <Row className={styles.languageColumn}>
                        <Col span={1} offset={0}> <CiGlobe /></Col>
                        <Col span={1} offset={6}>Каз</Col>
                        <Col span={2} offset={6}><span style={{ color: '#FFA542' }}>Рус</span></Col>
                        <Col span={2} offset={6}>Eng</Col>
                    </Row>

                </Col>
                <Col>
                    <Row>
                        <Col style={{fontSize:30, padding:'0 7px' }} ><SlSocialVkontakte /></Col>
                        <Col style={{fontSize:30, padding:'0 7px'}} ><PiTelegramLogoLight /></Col>
                        <Col style={{fontSize:30, padding:'0 7px'}} span={6} ><FaWhatsapp /></Col>
                    </Row>
                </Col>
            </Row>
        </Layout.Footer>
    );
}

export default FooterUI;