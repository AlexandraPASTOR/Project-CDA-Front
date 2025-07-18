import Header from '../components/Header';
import CarambarJokes from '../components/CarambarJokes';

function Home() {
  return (
    <>
      <Header />
      <section className="joke-content">
        <CarambarJokes />
      </section>
      </>
  );
}

export default Home;