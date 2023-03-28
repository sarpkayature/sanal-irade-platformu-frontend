// import NavBar from './components/nav-bar/NavBar';
import Link from 'next/link';

import VectorMap from './components/vector-map/VectorMap';

export default function Home() {
  return (
    <main>
      <h1>Sanal Irade Platformu</h1>
      <Link href='/witness'>Witness</Link>
      <Link href='/executive'>Executive</Link>
      <VectorMap />
    </main>
  );
}
