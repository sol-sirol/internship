import { makeAutoObservable } from "mobx";
import moment from "moment";

import { notification } from "antd";

import { GET_RESERVES } from "../query/reserves";
import { CREATE_RESERVES } from "../mutations/createReserve";
import { UPDATE_RESERVES } from "../mutations/updateReserve";
import { DELETE_RESERVES } from "../mutations/deleteReserve";

import { ApolloClient, InMemoryCache } from "@apollo/client";

const reserveSaved = () => {
  notification.success({
    message: "Резерв создан",
    placement: "top",
  });
};
const reserveUpdated = () => {
  notification.success({
    message: "Резерв обновлён",
    placement: "top",
  });
};
const reserveRemoved = () => {
  notification.info({
    message: "Резерв удалён",
    placement: "top",
  });
};

class Reserves {
  client = new ApolloClient({
    uri: "https://study.apiloc.ru/public/graphql",

    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "no-cache",
      },
      query: {
        fetchPolicy: "no-cache",
      },
      mutate: {
        fetchPolicy: "no-cache",
      },
    },
  });

  reservesList = [];

  constructor() {
    makeAutoObservable(this);
  }

  reloadReserves = () => {
    this.client
      .query({
        query: GET_RESERVES,
        variables: {},
      })
      .then((result) => {
        console.log(4545, result);
        this.reservesList = result.data.bookings.data;
        this.reservesList.reverse();
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

  createReserve = (reserve) => {
    const tm = {
      time: String(reserve.time),
      name: String(reserve.name),
      phone: String(reserve.phone),
      room: String(reserve.room),
      date: String(reserve.date),
      persons: reserve.persons,
    };

    console.log(999, tm);
    console.log(tm.persons);

    this.client
      .mutate({
        mutation: CREATE_RESERVES,
        variables: {
          entity: tm,
        },
      })
      .then((result) => {
        this.reloadReserves();
        reserveSaved();
      })
      .catch((err) => {
        throw err;
      });
  };

  updateReserve = (id, data) => {
    console.log(id, data);
    const chengedReserve = {
      time: String(data.time),
      name: String(data.name),
      phone: String(data.phone),
      room: String(data.room),
      date: String(data.date),
      persons: 4,
    };
    console.log(chengedReserve);

    this.client
      .mutate({
        mutation: UPDATE_RESERVES,
        variables: {
          id: id,
          entity: chengedReserve,
        },
      })
      .then((result) => {
        console.log(result);
        this.reloadReserves();
        reserveUpdated();
      })
      .catch((err) => {
        throw err;
      });
  };

  removeReserve = (id) => {
    console.log(id);
    this.client
      .mutate({
        mutation: DELETE_RESERVES,
        variables: {
          id: id,
        },
      })
      .then((result) => {
        this.reloadReserves();
        reserveSaved();
      });
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
