import "./App.css";
import MyAside from "./components/MyAside";
import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";
import OrderSheet from "./components/OrderSheet";

function App() {
  const OrderSheetItems = [
    {
      id: 1,
      time: "17.22",
      status: "Ожидане",

      persons: 5,
      reservationTime: "10.00",

      customer: "Денис",
      phoneCustomer: "+7 (916) 333-66-33",

      place: "Основной зал, №11",

      created: "03.02.2019 14:16",
    },
    {
      id: 2,
      time: "17.23",
      status: "Ожидане",

      persons: 4,
      reservationTime: "11.00",

      customer: "Артём",
      phoneCustomer: "+7 (916) 444-66-33",

      place: "Основной зал, №11",

      created: "03.02.2019 14:16",
    },
    {
      id: 3,
      time: "17.22",
      status: "Ожидане",

      persons: 5,
      reservationTime: "10.00",

      customer: "Денис",
      phoneCustomer: "+7 (916) 333-66-33",

      place: "Основной зал, №11",

      created: "03.02.2019 14:16",
    },
    {
      id: 4,
      time: "17.23",
      status: "Ожидане",

      persons: 4,
      reservationTime: "11.00",

      customer: "Артём",
      phoneCustomer: "+7 (916) 444-66-33",

      place: "Основной зал, №11",

      created: "03.02.2019 14:16",
    },
    {
      id: 5,
      time: "17.22",
      status: "Ожидане",

      persons: 5,
      reservationTime: "10.00",

      customer: "Денис",
      phoneCustomer: "+7 (916) 333-66-33",

      place: "Основной зал, №11",

      created: "03.02.2019 14:16",
    },
    {
      id: 6,
      time: "17.23",
      status: "Ожидане",

      persons: 4,
      reservationTime: "11.00",

      customer: "Артём",
      phoneCustomer: "+7 (916) 444-66-33",

      place: "Основной зал, №11",

      created: "03.02.2019 14:16",
    },
  ];
  return (
    <div className="App">
      <div className="wrapper">
        <div className="wrapper__container container">
          <MyHeader />
          <main className="main">
            <MyAside />
            <div className="content">
              <div className="content__wrapper">
                <div className="content__body">
                  <div className="order-sheet">
                    <div className="order-sheet__wrapper">
                      <div className="order-sheet__container">
                        <div className="order-sheet__body">
                          {OrderSheetItems.map((el) => (
                            <OrderSheet data={el} key={el.id} />
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
}

export default App;
