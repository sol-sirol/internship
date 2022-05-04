import SvgSelector from "../assets/images";
import SheetSection from "./SheetSection";
import MyImage from "./UI/MyImage";

import Group from "../assets/images/sheet/group.svg";
import Schedule from "../assets/images/sheet/schedule.svg";
import AccountBox from "../assets/images/sheet/account_box.svg";
import LocalPhone from "../assets/images/sheet/local_phone.svg";
import Table from "../assets/images/sheet/table.svg";
import BorderColor from "../assets/images/sheet/border_color.svg";

const OrderSheet = (props) => {
  return (
    <div className="sheet">
      <div className="sheet__wrapper">
        <div className="sheet__body">
          <SheetSection top={props.data.time} bottom={props.data.status} />
          <SheetSection
            top={props.data.persons}
            bottom={props.data.reservationTime}
            iconTo={
              <MyImage
                imageSrc={Group}
                imageStyle={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  height: "24px",
                  width: "24px",
                }}
              />
            }
            iconBottom={
              <MyImage
                imageSrc={Schedule}
                imageStyle={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  height: "24px",
                  width: "24px",
                }}
              />
            }
          />
          <SheetSection
            top={props.data.customer}
            bottom={props.data.phoneCustomer}
            iconTo={
              <MyImage
                imageSrc={AccountBox}
                imageStyle={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  height: "24px",
                  width: "24px",
                }}
              />
            }
            iconBottom={
              <MyImage
                imageSrc={LocalPhone}
                imageStyle={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  height: "24px",
                  width: "24px",
                }}
              />
            }
          />
          <SheetSection
            top={props.data.place}
            bottom={null}
            iconTo={
              <MyImage
                imageSrc={Table}
                imageStyle={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  height: "24px",
                  width: "24px",
                }}
              />
            }
          />
          <SheetSection
            top={props.data.created}
            iconTo={"Создан "}
            bottom={null}
          />
          <button className="sheet__section" title="Изменить">
            <MyImage
              imageSrc={BorderColor}
              imageStyle={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
                height: "24px",
                width: "24px",
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSheet;
