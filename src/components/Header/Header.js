import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

import { useCart } from '../../hooks/use-cart.js';

import styles from './Header.module.scss';

const Header = () => {
  const { subtotal, cartItems } = useCart();

  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.headerContainer}`}>
          <p className={styles.title}>
            <Link href="/">
              <a>
                Video Game Store
              </a>
            </Link>
          </p>
          <div className={styles.cart}>
            <p className={styles.cartSubtotal}>
              <FaShoppingCart className={styles.cartIcon} />
              ${subtotal.toFixed(2)}
            </p>
            {cartItems.length > 0 && (
              <div className={styles.cartMenu}>
                <ul className={styles.cartItems}>
                  {cartItems.map(game => {
                    return (
                      <li key={game.id} className={styles.cartItem}>
                        <p>{ game.name }</p>
                        <p>${ game.price.toFixed(2) }</p>
                        <p>{ game.quantity }</p>
                      </li>
                    )
                  })}
                </ul>
                <p className={styles.cartCheckout}>
                  <button className={styles.cartCheckoutButton}>
                    Check Out
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>
      </header>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <ul className={styles.navLinks}>
            <li>
              <a href="#">
                Xbox Series X
              </a>
            </li>
            <li>
              <a href="#">
                Playstation 5
              </a>
            </li>
            <li>
              <a href="#">
                Nintendo Switch
              </a>
            </li>
            <li>
              <a href="#">
                PC
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header;