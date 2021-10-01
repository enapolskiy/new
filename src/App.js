
import './App.css';
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App-cont">
     <Header />

      <nav className="Nav">
          <ul className="content">
              <li className="item">
<h3>Example 1</h3>
              </li>
              <li className="item">
                  <h3>Example 2</h3>
              </li>
              <li className="item">
                  <h3>Example 3</h3>
              </li>
              <li className="item">
                  <h3>Example 4</h3>
              </li>
          </ul>
      </nav>

      <section className="Section">Основной контент</section>

      <aside className="Aside">Блок виджетов</aside>

      <footer className="Footer">Подвал</footer>

    </div>



  );
}

export default App;
