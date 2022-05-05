import { DropDownDayList } from "./UI/DropDownDayList";
import { DropDownStatusList } from "./UI/DropDownStatusList";
import HeaderButton from "./UI/HeaderButton";
import MyImage from "./UI/MyImage";

import Search from "../assets/images/header/search.svg";
import Label from "../assets/images/header/label.svg";
import DateRange from "../assets/images/header/date_range.svg";
import MapUnfold from "../assets/images/header/map-unfold.svg";
import Settings from "../assets/images/header/settings.svg";
import Assignment from "../assets/images/header/assignment.svg";

const MyHeader = ({ createReserve }) => {
  return (
    <header className="header">
      <div className="header__body">
        <button
          onClick={() => createReserve()}
          className="header__button header__button_green"
          title="Новый резерв"
        >
          <div className="header__logo">
            <MyImage height="14px" imageSrc={Label} />
          </div>
        </button>

        <DropDownDayList />

        <HeaderButton title="Календарь">
          <MyImage height="24px" imageSrc={DateRange} />
        </HeaderButton>

        <DropDownStatusList />

        <HeaderButton title="ХЗ, честно сказать">
          <MyImage height="24px" imageSrc={MapUnfold} />
        </HeaderButton>

        <HeaderButton title="Поиск">
          <MyImage height="24px" imageSrc={Search} />
        </HeaderButton>

        <HeaderButton title="Настройки">
          <MyImage height="24px" imageSrc={Settings} />
        </HeaderButton>

        <HeaderButton title="Журнал">
          <MyImage height="24px" imageSrc={Assignment} />
        </HeaderButton>
      </div>
    </header>
  );
};

export default MyHeader;
