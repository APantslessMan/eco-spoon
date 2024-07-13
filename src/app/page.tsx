
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Info from './components/Info';
import Products from './components/Products';

export default function Home() {
  return (
    <>
    {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      <Navbar />
     <Hero />
<Info />
<Products />

    </>
  );
}
