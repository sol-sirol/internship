import SvgSelector from "../assets/images";
import SheetSection from "./SheetSection";

const OrderSheet = (props) => {
  return (
    <div className="sheet">
      <div className="sheet__wrapper">
        <div className="sheet__body">
          <SheetSection top={props.data.time} bottom={props.data.status} />
          <SheetSection
            top={props.data.persons}
            bottom={props.data.reservationTime}
            iconTopName="group"
            iconBottomName="schedule"
          />
          <SheetSection
            top={props.data.customer}
            bottom={props.data.phoneCustomer}
            iconTopName="account_box"
            iconBottomName="local_phone"
          />
          <SheetSection
            top={props.data.place}
            bottom={null}
            iconTopName="table"
          />
          <SheetSection top={props.data.created} bottom={null} />
          <button className="sheet__section" title="Изменить">
            <SvgSelector name="border_color" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSheet;
