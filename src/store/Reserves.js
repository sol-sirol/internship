import { makeAutoObservable } from "mobx";
import moment from "moment";

class Reserves {
  reservesList = [
    {
      id: 6,
      time: "17.23",
      status: "Ожидане",

      persons: 5,
      reservationTime: "11:00",

      customer: "Артём",
      phoneCustomer: "79164446633",

      place: "Основной зал, №11",

      created: "03.02.2019 14:16",

      edited: false,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  createReserve = () => {
    const tm = [...this.reservesList];
    tm.unshift({
      id:
        Math.random().toString(16).slice(2) + new Date().getTime().toString(36),
      time: 17.55,
      status: "Ожидане",

      persons: 4,
      reservationTime: "11:00",

      customer: null,
      phoneCustomer: null,

      place: "Основной зал, №11",

      created: moment().format("MM.DD.YYYY HH:mm"),

      edited: true,
    });

    this.reservesList = [...tm];
  };

  updateReserve = (id, data) => {
    const tm = this.reservesList.map((e) => {
      if (e.id === id) {
        return { ...data };
      } else {
        return { ...e };
      }
    });

    this.reservesList = [...tm];
  };

  removeReserve = (id) => {
    const tm = this.reservesList.filter((e) => e.id !== id);

    this.reservesList = [...tm];
  };

  get numberGuests() {
    let tm = 0;
    this.reservesList.forEach((item) => {
      tm += item.persons;
    });
    return tm;
  }

  get numberReserves() {
    return this.reservesList.length;
  }
}

export default new Reserves();
