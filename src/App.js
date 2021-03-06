import './scss/app.scss';
import Header from "./componets/Header";
import Categories from "./componets/Categories";
import Sort from "./componets/Sort";
import PizzaBlock from "./componets/PizzaBlock";
import pizzas from "./assets/pizzas.json"


function App() {
  return (
      <div className="wrapper">
         <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories/>
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {pizzas.map((pizza) =>
                  <PizzaBlock {...pizza}/>
              )}
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
