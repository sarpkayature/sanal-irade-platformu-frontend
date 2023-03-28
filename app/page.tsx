import { VectorMaps, HorizontalHeader, DButton } from './components';

export default function Home() {
  return (
    <main>
      <HorizontalHeader isBtnGroupActive />
      <VectorMaps />
      <DButton content="Click Bro" props={{ variant: 'contained' }} />
    </main>
  );
}
