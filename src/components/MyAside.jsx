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
            <MyImage
              imageSrc={Notifications}
              imageStyle={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
                height: "26px",
              }}
            />
          </AsideItem>
        </div>
        <div className="aside-bar__bottom">
          <AsideItem>
            <MyImage
              imageSrc={Vector}
              imageStyle={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
                height: "32px",
              }}
            />
          </AsideItem>
          <AsideItem>
            <MyImage
              imageSrc={WbSunny}
              imageStyle={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
                height: "30px",
              }}
            />
          </AsideItem>
          <AsideItem>
            <MyImage
              imageSrc={Wifi}
              imageStyle={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
                height: "21px",
              }}
            />
          </AsideItem>
          <AsideItem>
            <MyImage
              imageSrc={BatteryFull}
              imageStyle={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
                height: "27px",
              }}
            />
          </AsideItem>
        </div>
      </div>
    </aside>
  );
};

export default MyAside;
