import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="wrapper">
     <Drawer />
      <div className="container">
        <Header />
      </div>
      <hr />
      <main>
        <div className="container">
          <section className="section">
            <div className="section__header">
              <h3 className="section__title">Все кроссовки</h3>
              <div className="section__search">
                <img src="./img/searchIcon.svg" alt="search" />
                <input type="text" placeholder="Поиск..." />
              </div>
            </div>
            <div className="section__content">
            <Card />
            <Card />
            <Card />
            <Card />

            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
