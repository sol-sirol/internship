import React, { useState } from "react";

export const DropDownDayList = (props) => {
  const [openness, setOpenness] = useState(false);

  const dateList = [
    {
      id: 1,
      title: " Сегодня, 3 февраля (восркесенье)",
    },
    {
      id: 2,
      title: " Сегодня, 3 февраля (восркесенье)",
    },
    {
      id: 3,
      title: " Сегодня, 3 февраля (восркесенье)",
    },
    {
      id: 4,
      title: " Сегодня, 3 февраля (восркесенье)",
    },
    {
      id: 5,
      title: " Сегодня, 3 февраля (восркесенье)",
    },
    {
      id: 6,
      title: " Сегодня, 3 февраля (восркесенье)",
    },
    {
      id: 7,
      title: " Сегодня, 3 февраля (восркесенье)",
    },
    {
      id: 8,
      title: " Сегодня, 3 февраля (восркесенье)",
    },
  ];

  function controlOpenness(evt) {
    if (!evt.target.closest(".day-selection")) {
      setOpenness(!openness);
    }
  }

  return (
    <button
      onClick={(evt) => controlOpenness(evt)}
      className="header__button header__button_drop header__button_drop_big"
      title="Выбор дня"
    >
      Завтра, 4 февраля (понедельник)
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
      <div className={`day-selection ${openness ? "_active_drop" : ""}`}>
        <div className="day-selection__wrapper">
          <div className="day-selection__container">
            <div className="day-selection__body">
              <ul className="day-selection__items">
                {dateList.map((item) => (
                  <li className="day-selection__item" key={item.id}>
                    {item.title}
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
