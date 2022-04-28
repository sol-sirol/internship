const DropDownList = ({ children, ...props }) => {
  return (
    <button
      className="header__button header__button_drop header__button_drop_big"
      title="Выбор дня"
    >
      {children}
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
      <div className="day-selection">
        <div className="day-selection__wrapper">
          <div className="day-selection__container">
            <div className="day-selection__body">
              <ul className="day-selection__items">
                {props.list.map((item) => (
                  <li className="day-selection__item">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default DropDownList;
