import Link from 'next/link';
import { useRouter } from 'next/router';

function Navbar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <a style={{ color: router.pathname === '/' ? '#ff4747' : '#06f' }}>
          Home
        </a>
      </Link>
      <Link href="/about">
        <a style={{ color: router.pathname === '/about' ? '#ff4747' : '#06f' }}>
          About
        </a>
      </Link>
    </nav>
  );
}

export default Navbar;
