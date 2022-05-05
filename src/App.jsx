import { useState } from "react";
import "./App.css";
import MyAside from "./components/MyAside";
import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";
import OrderSheet from "./components/OrderSheet";

function App() {
  const [reservesList, setReservesList] = useState([
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
  ]);

  const orderSheetItems = [
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

  function createReserve() {
    const tm = [
      ...reservesList,
      {
        id:
          Math.random().toString(16).slice(2) +
          new Date().getTime().toString(36),
        time: "155.23",
        status: "Ожидане",

        persons: 4,
        reservationTime: "11.00",

        customer: "Артём",
        phoneCustomer: "+7 (916) 444-66-33",

        place: "Основной зал, №11",

        created: "03.02.2019 14:16",
      },
    ];
    setReservesList(tm);
  }

  // function updateReserve(id, data) {
  //   const tm = reservesList.map((e) => {
  //     if (e.id == id) {
  //       console.log(55555555555555, e);
  //       e.phoneCustomer = data.phoneCustomer;
  //     }
  //   });
  //   console.log(tm);
  //   setReservesList(tm);
  // }

  function updateReserve(id, data) {
    const tm = reservesList.map((e) => {
      if (e.id == id) {
        return { ...data };
      } else {
        return { ...e };
      }
    });
    setReservesList(tm);
  }

  function removeReserve(id) {
    const tm = reservesList.filter((e) => e.id !== id);
    setReservesList(tm);
  }

  return (
    <div className="App">
      <div className="wrapper">
        <div className="wrapper__container container">
          <MyHeader createReserve={createReserve} />
          <main className="main">
            <MyAside />
            <div className="content">
              <div className="content__wrapper">
                <div className="content__body">
                  <div className="order-sheet">
                    <div className="order-sheet__wrapper">
                      <div className="order-sheet__container">
                        <div className="order-sheet__body">
                          {reservesList.map((el) => (
                            <OrderSheet
                              removeReserve={removeReserve}
                              updateReserve={updateReserve}
                              data={el}
                              key={el.id}
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
}

export default App;
