import React, { useState } from "react";
import StatusInput from "../StatusInput";
import MyImage from "../MyImage";

import ArrowDropDown from "../../../assets/images/header/arrow_drop_down.svg";

export const DropDownStatusList = (props) => {
  const [openness, setOpenness] = useState(false);
  const [statusList, setStatusList] = useState([
    {
      id: "expectation",
      title: "Ожидание",
      checked: true,
    },
    {
      id: "came",
      title: "Пришёл",
      checked: true,
    },
    {
      id: "gone",
      title: "Ушёл",
      checked: true,
    },
    {
      id: "not-come",
      title: "Не пришёл",
      checked: true,
    },
    {
      id: "canceled",
      title: "Отменён хостес",
      checked: false,
    },
    {
      id: "Group-halls",
      title: "Группировать по залам",
      checked: false,
    },
  ]);

  // function chengChecked() {
  //   const newInput = setStatusList([...statusList]);
  // }
  // const statusList = ;

  function controlOpenness(evt) {
    if (!evt.target.closest(".status-selection")) {
      setOpenness(!openness);
    }
  }

  return (
    <button
      onClick={(evt) => controlOpenness(evt)}
      className="
        header__button header__button_drop header__button_drop_small
      "
      title="Выбор статуса"
    >
      Несколько значений
      <span>
        <MyImage height="11px" width="11px" imageSrc={ArrowDropDown} />
      </span>
      <div className={`status-selection ${openness ? "_active_drop" : ""}`}>
        <div className="status-selection__wrapper">
          <div className="status-selection__container">
            <div className="status-selection__body">
              <div className="status-selection__head">Все статусы</div>
              <ul className="status-selection__items">
                {statusList.map((item) => (
                  <li key={item.id} className="status-selection__item">
                    <StatusInput
                      className="status-selection__input"
                      id={item.id}
                      type="checkbox"
                      content={item.title}
                      checked={item.checked}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};
