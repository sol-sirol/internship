import React, { useState } from "react";
import StatusInput from "../StatusInput";

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
        <svg
          width="12"
          height="6"
          viewBox="0 0 12 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.984375 0.984375H11.0156L6 6L0.984375 0.984375Z"
            fill="#666666"
          />
        </svg>
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
