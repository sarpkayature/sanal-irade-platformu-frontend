import NavBar from './components/nav-bar/NavBar';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* <NavBar /> */}
      <main>
        <h1>Home</h1>
        <Link href='/witness'>Witness</Link>
        <Link href='/executive'>Executive</Link>
      </main>
    </>
  );
}
