import "./App.css";
import MyAside from "./components/MyAside";
import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";
import OrderSheet from "./components/OrderSheet";

import Reserves from "./store/Reserves";
import { observer } from "mobx-react-lite";

const App = observer(() => {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="wrapper__container container">
          <MyHeader createReserve={Reserves.createLocalReserve} />
          <main className="main">
            <MyAside />
            <div className="content">
              <div className="content__wrapper">
                <div className="content__body">
                  <div className="order-sheet">
                    <div className="order-sheet__wrapper">
                      <div className="order-sheet__container">
                        <div className="order-sheet__body">
                          {Reserves.reservesList.map((el) => (
                            <OrderSheet
                              removeReserve={Reserves.removeReserve}
                              updateReserve={Reserves.updateReserve}
                              createReserve={Reserves.createReserve}
                              reloadReserves={Reserves.reloadReserves}
                              data={el}
                              key={el._id}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <MyFooter />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
});

export default App;
