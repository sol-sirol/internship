import AsideItem from "./UI/AsideItem";
import MyImage from "./UI/MyImage";

import Notifications from "../assets/images/side-bar/notifications.svg";
import Vector from "../assets/images/side-bar/vector.svg";
import WbSunny from "../assets/images/side-bar/wb_sunny.svg";
import Wifi from "../assets/images/side-bar/wifi.svg";
import BatteryFull from "../assets/images/side-bar/battery_full.svg";

const MyAside = () => {
  return (
    <aside className="aside">
      <div className="aside__body aside-bar">
        <div className="aside-bar__top">
          <AsideItem>17.22</AsideItem>
          <AsideItem>
            <MyImage height="26px" imageSrc={Notifications} />
          </AsideItem>
        </div>
        <div className="aside-bar__bottom">
          <AsideItem>
            <MyImage height="32px" imageSrc={Vector} />
          </AsideItem>
          <AsideItem>
            <MyImage height="30px" imageSrc={WbSunny} />
          </AsideItem>
          <AsideItem>
            <MyImage height="21px" imageSrc={Wifi} />
          </AsideItem>
          <AsideItem>
            <MyImage height="27px" imageSrc={BatteryFull} />
          </AsideItem>
        </div>
      </div>
    </aside>
  );
};

export default MyAside;
