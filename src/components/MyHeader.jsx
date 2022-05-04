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

const MyHeader = () => {
  return (
    <header className="header">
      <div className="header__body">
        <button
          className="header__button header__button_green"
          title="Новый резерв"
        >
          <div className="header__logo">
            <MyImage
              imageSrc={Label}
              imageStyle={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
                height: "14px",
              }}
            />
          </div>
        </button>

        <DropDownDayList />

        <HeaderButton title="Календарь">
          <MyImage
            imageSrc={DateRange}
            imageStyle={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
              height: "24px",
            }}
          />
        </HeaderButton>

        <DropDownStatusList />

        <HeaderButton title="ХЗ, честно сказать">
          <MyImage
            imageSrc={MapUnfold}
            imageStyle={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
              height: "24px",
            }}
          />
        </HeaderButton>

        <HeaderButton title="Поиск">
          <MyImage
            imageSrc={Search}
            imageStyle={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
              height: "24px",
            }}
          />
        </HeaderButton>

        <HeaderButton title="Настройки">
          <MyImage
            imageSrc={Settings}
            imageStyle={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
              height: "24px",
            }}
          />
        </HeaderButton>

        <HeaderButton title="Журнал">
          <MyImage
            imageSrc={Assignment}
            imageStyle={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
              height: "24px",
            }}
          />
        </HeaderButton>
      </div>
    </header>
  );
};

export default MyHeader;
