import SvgSelector from "../assets/images";
import { DropDownDayList } from "./UI/DropDownDayList";
import { DropDownStatusList } from "./UI/DropDownStatusList";
import HeaderButton from "./UI/HeaderButton";

const MyHeader = () => {
  return (
    <header className="header">
      <div className="header__body">
        <button
          className="header__button header__button_green"
          title="Новый резерв"
        >
          <div className="header__logo">
            <SvgSelector name="label" />
          </div>
        </button>

        <DropDownDayList />

        <HeaderButton title="Календарь">
          <SvgSelector name="date_range" />
        </HeaderButton>

        <DropDownStatusList />

        <HeaderButton title="ХЗ, честно сказать">
          <SvgSelector name="map-unfold" />
        </HeaderButton>

        <HeaderButton title="Поиск">
          <SvgSelector name="search" />
        </HeaderButton>

        <HeaderButton title="Настройки">
          <SvgSelector name="settings" />
        </HeaderButton>

        <HeaderButton title="Журнал">
          <SvgSelector name="assignment" />
        </HeaderButton>
      </div>
    </header>
  );
};

export default MyHeader;
