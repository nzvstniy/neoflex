import styles from './navbar.module.css'
interface ICount {
    productsCount: number
}

export const Navbar: React.FC<ICount> = ({ productsCount }) => {

    return (
        
        <div className={styles.productsCount}>{productsCount}</div>
    )
}
