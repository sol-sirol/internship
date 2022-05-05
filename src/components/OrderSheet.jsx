import SheetSection from "./SheetSection";
import MyImage from "./UI/MyImage";

import Group from "../assets/images/sheet/group.svg";
import Schedule from "../assets/images/sheet/schedule.svg";
import AccountBox from "../assets/images/sheet/account_box.svg";
import LocalPhone from "../assets/images/sheet/local_phone.svg";
import Table from "../assets/images/sheet/table.svg";
import BorderColor from "../assets/images/sheet/border_color.svg";
import { useState } from "react";

const OrderSheet = ({ data, removeReserve, updateReserve, ...props }) => {
  const [reserve, setReserve] = useState({ ...data });

  const [editMode, seteditMode] = useState(false);

  return (
    <div className="sheet">
      <div className="sheet__wrapper">
        <div className="sheet__body">
          <SheetSection top={data.time} bottom={data.status} />
          <SheetSection
            top={data.persons}
            bottom={data.reservationTime}
            iconTo={<MyImage height="24px" width="24px" imageSrc={Group} />}
            iconBottom={
              <MyImage height="24px" width="24px" imageSrc={Schedule} />
            }
          />
          <SheetSection
            top={data.customer}
            bottom={data.phoneCustomer}
            iconTo={
              <MyImage height="24px" width="24px" imageSrc={AccountBox} />
            }
            iconBottom={
              <MyImage height="24px" width="24px" imageSrc={LocalPhone} />
            }
          />
          <SheetSection
            top={data.place}
            bottom={null}
            iconTo={<MyImage height="24px" width="24px" imageSrc={Table} />}
          />
          <SheetSection top={data.created} iconTo={"Создан "} bottom={null} />

          {!editMode ? (
            <button
              onClick={() => {
                seteditMode(!editMode);
                console.log(55454545, editMode);
              }}
              className="sheet__section"
              title="Изменить"
            >
              <MyImage height="24px" width="24px" imageSrc={BorderColor} />
            </button>
          ) : (
            <>
              <button
                onClick={() => {
                  updateReserve(data.id, reserve);
                  seteditMode(!editMode);
                }}
                className="sheet__section"
                title="Изменить"
              >
                Изменить
              </button>
              <button
                onClick={() => {
                  removeReserve(data.id);
                }}
                className="sheet__section"
                title="Изменить"
              >
                Удалить
              </button>
              <input
                value={reserve.customer}
                onChange={(e) => {
                  setReserve({ ...reserve, customer: e.target.value });
                }}
                className="myInput"
                type="text"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderSheet;
