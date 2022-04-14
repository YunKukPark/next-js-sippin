import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css';

function Navbar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <a
          className={`${styles.link} ${
            router.pathname === '/' && styles.active
          }`}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          className={`${styles.link} ${
            router.pathname === '/about' && styles.active
          }`}
        >
          About
        </a>
      </Link>
    </nav>
  );
}

export default Navbar;
