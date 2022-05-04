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
            iconTo={<MyImage height="24px" width="24px" imageSrc={Group} />}
            iconBottom={
              <MyImage height="24px" width="24px" imageSrc={Schedule} />
            }
          />
          <SheetSection
            top={props.data.customer}
            bottom={props.data.phoneCustomer}
            iconTo={
              <MyImage height="24px" width="24px" imageSrc={AccountBox} />
            }
            iconBottom={
              <MyImage height="24px" width="24px" imageSrc={LocalPhone} />
            }
          />
          <SheetSection
            top={props.data.place}
            bottom={null}
            iconTo={<MyImage height="24px" width="24px" imageSrc={Table} />}
          />
          <SheetSection
            top={props.data.created}
            iconTo={"Создан "}
            bottom={null}
          />
          <button className="sheet__section" title="Изменить">
            <MyImage height="24px" width="24px" imageSrc={BorderColor} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSheet;
