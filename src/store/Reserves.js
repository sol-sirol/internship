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

  createReserve = async () => {
    const tm = [...this.reservesList];
    const layoutNewReserve = {
      persons: 1,
      time: "11:00",
      name: "name",
      phone: "7",
      room: "1",
      date: moment().format(),
      edited: true,
    };

    const newReserve = await sendReserves(layoutNewReserve);

    tm.unshift({ ...newReserve.data, name: "", edited: true });
    this.reservesList = [...tm];
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
    deleteReserves({ id });
    const tm = this.reservesList.filter((e) => e._id !== id);

    this.reservesList = [...tm];
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
