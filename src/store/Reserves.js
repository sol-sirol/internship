import { makeAutoObservable } from "mobx";
import moment from "moment";
import { getReserves, sendReserves } from "../API";

const data = await getReserves("http://188.225.56.153:3000/booking");
console.log(data);

const newData = {
  persons: 5,
  time: "10:15",

  name: "Артём",
  phone: "79164446633",

  room: 11,
};

const state = {
  data: [
    {
      persons: 5,
      time: "10:15",

      name: "Артём",
      phone: "79164446633",

      room: 11,
    },
  ],
  type: "success",
};

// ТУТ
// const ff = await sendReserves("http://188.225.56.153:3000/booking", newData);
// console.log(ff);

class Reserves {
  reservesList = [
    {
      _id: 6,

      persons: 5,
      time: "10:15",

      name: "Артём",
      phone: "79164446633",

      room: 11,

      created_at: "03.02.2019 14:16",

      edited: false,
    },
    ...data.data,
  ];

  constructor() {
    makeAutoObservable(this);
  }

  createReserve = () => {
    const tm = [...this.reservesList];
    tm.unshift({
      _id:
        Math.random().toString(16).slice(2) + new Date().getTime().toString(36),
      status: "Ожидане",

      persons: 4,
      time: "11:00",

      name: null,
      phone: null,

      room: null,

      created_at: moment().format(),

      edited: true,
    });

    this.reservesList = [...tm];
  };

  updateReserve = (id, data) => {
    const tm = this.reservesList.map((e) => {
      if (e._id === id) {
        return { ...data };
      } else {
        return { ...e };
      }
    });

    this.reservesList = [...tm];
  };

  removeReserve = (id) => {
    const tm = this.reservesList.filter((e) => e._id !== id);

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
