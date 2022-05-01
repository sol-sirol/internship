import SvgSelector from "../assets/images";
import AsideItem from "./UI/AsideItem";

const MyAside = () => {
  return (
    <aside className="aside">
      <div className="aside__body aside-bar">
        <div className="aside-bar__top">
          <AsideItem>17.22</AsideItem>
          <AsideItem>
            <SvgSelector name="notifications" />
          </AsideItem>
        </div>
        <div className="aside-bar__bottom">
          <AsideItem>
            <SvgSelector name="vector" />
          </AsideItem>
          <AsideItem>
            <SvgSelector name="wb_sunny" />
          </AsideItem>
          <AsideItem>
            <SvgSelector name="wifi" />
          </AsideItem>
          <AsideItem>
            <SvgSelector name="battery_full" />
          </AsideItem>
        </div>
      </div>
    </aside>
  );
};

export default MyAside;
