import { makeAutoObservable } from "mobx";
import moment from "moment";
import {
  getReserves,
  sendReserves,
  changeReserves,
  deleteReserves,
} from "../API";

const reserves = await getReserves();
reserves.data.reverse();

class Reserves {
  reservesList = [...reserves.data];

  constructor() {
    makeAutoObservable(this);
  }

  reloadReserves = () => {
    getReserves().then((reserves) => {
      this.reservesList = reserves.data.reverse();
    });
  };

  createLocalReserve = () => {
    const tm = [...this.reservesList];
    const newReserve = {
      persons: 1,
      time: "11:00",
      name: "",
      phone: "",
      room: "1",
      date: moment().format(),
      edited: true,
      ferstStap: true,
    };

    tm.unshift({ ...newReserve });
    this.reservesList = [...tm];
  };

  createReserve = async (reserve) => {
    await sendReserves(reserve);

    this.reloadReserves();
  };

  updateReserve = async (id, data) => {
    const chengedReserve = {
      persons: data.persons,
      time: data.time,
      name: data.name,
      phone: data.phone,
      room: data.room,
      date: data.date,
      id: id,
      edited: false,
    };

    await changeReserves(chengedReserve);

    this.reloadReserves();
  };
  removeReserve = (id) => {
    deleteReserves({ id });

    this.reloadReserves();
  };

  get numberGuests() {
    let tm = 0;
    this.reservesList.forEach((item) => {
      tm += Number(item.persons);
    });
    return tm;
  }

  get numberReserves() {
    return this.reservesList.length;
  }
}

export default new Reserves();
