import SheetSection from "./SheetSection";
import MyImage from "./UI/MyImage";

import Group from "../assets/images/sheet/group.svg";
import Schedule from "../assets/images/sheet/schedule.svg";
import AccountBox from "../assets/images/sheet/account_box.svg";
import LocalPhone from "../assets/images/sheet/local_phone.svg";
import Table from "../assets/images/sheet/table.svg";
import BorderColor from "../assets/images/sheet/border_color.svg";
import { useEffect, useState } from "react";

const OrderSheet = ({ data, removeReserve, updateReserve, ...props }) => {
  const [editMode, seteditMode] = useState(data.edited);

  const [reserve, setReserve] = useState({ ...data });

  const [arreySelected, setArreySelected] = useState([
    { selected: false, value: "Ожидание" },
    { selected: false, value: "Пришёл" },
    { selected: false, value: "Ушёл" },
    { selected: false, value: "Не пришёл" },
  ]);

  // const ff = () => {
  //   const tm = arreySelected.map((item) => {
  //     if (item.value === data.status) {
  //       return {
  //         ...item,
  //         status: true,
  //       };
  //     }
  //   });
  //   setArreySelected(tm);
  // };

  const setStatus = (e) => {
    setReserve({
      ...reserve,
      status: e.target.options[e.target.selectedIndex].value,
    });
  };

  return (
    <div className="sheet">
      <div className="sheet__wrapper">
        <div className="sheet__body">
          <SheetSection
            top={data.time}
            bottom={
              !editMode ? (
                data.status
              ) : (
                <select onChange={(e) => setStatus(e)}>
                  {arreySelected.map((item) => (
                    <option selected={item.selected} value={item.value}>
                      {item.value}
                    </option>
                  ))}
                </select>
              )
            }
          />
          <SheetSection
            top={data.persons}
            bottom={data.reservationTime}
            iconTo={<MyImage height="24px" width="24px" imageSrc={Group} />}
            iconBottom={
              <MyImage height="24px" width="24px" imageSrc={Schedule} />
            }
          />
          <SheetSection
            top={
              !editMode ? (
                data.customer
              ) : (
                <input
                  value={reserve.customer}
                  onChange={(e) => {
                    setReserve({ ...reserve, customer: e.target.value });
                  }}
                  className="myInput"
                  type="text"
                />
              )
            }
            bottom={
              !editMode ? (
                data.phoneCustomer
              ) : (
                <input
                  value={reserve.phoneCustomer}
                  onChange={(e) => {
                    setReserve({ ...reserve, phoneCustomer: e.target.value });
                  }}
                  className="myInput"
                  type="text"
                />
              )
            }
            iconTo={
              <MyImage height="24px" width="24px" imageSrc={AccountBox} />
            }
            iconBottom={
              <MyImage height="24px" width="24px" imageSrc={LocalPhone} />
            }
          />
          <SheetSection
            top={
              !editMode ? (
                data.place
              ) : (
                <input
                  value={reserve.place}
                  onChange={(e) => {
                    setReserve({ ...reserve, place: e.target.value });
                  }}
                  className="myInput"
                  type="text"
                />
              )
            }
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderSheet;
