import SheetSection from "./SheetSection";
import { useEffect, useState, useRef } from "react";
import InputMask from "react-input-mask";
import MyImage from "./UI/MyImage";
import moment from "moment";

import Group from "../assets/images/sheet/group.svg";
import Schedule from "../assets/images/sheet/schedule.svg";
import AccountBox from "../assets/images/sheet/account_box.svg";
import LocalPhone from "../assets/images/sheet/local_phone.svg";
import Table from "../assets/images/sheet/table.svg";
import BorderColor from "../assets/images/sheet/border_color.svg";
import CheckMark from "../assets/images/sheet/check_mark.svg";
import Basket from "../assets/images/sheet/basket.svg";

const STATUSES = [
  { value: "Ожидание" },
  { value: "Пришёл" },
  { value: "Ушёл" },
  { value: "Не пришёл" },
];

const OrderSheet = ({ data, removeReserve, updateReserve, ...props }) => {
  const [editMode, seteditMode] = useState(data.edited);

  const [reserve, setReserve] = useState({ ...data });

  const [statusSelected, setStatusSelected] = useState("Ожидание");

  const personsRef = useRef(null);

  useEffect(() => {
    if (editMode) {
      personsRef?.current?.focus();
    }
  }, [editMode]);

  useEffect(() => {
    setReserve({
      ...reserve,
      status: statusSelected,
    });
  }, [statusSelected]);

  const convertedPhone = (phone) => {
    const convertedPhone = phone?.split("");

    convertedPhone?.splice(0, 0, "+");
    convertedPhone?.splice(2, 0, " (");
    convertedPhone?.splice(6, 0, ") ");
    convertedPhone?.splice(10, 0, "-");
    convertedPhone?.splice(13, 0, "-");

    return convertedPhone;
  };

  return (
    <div className={"sheet" + (editMode ? " " + "sheet_update" : "")}>
      <div className="sheet__wrapper">
        <div className="sheet__body">
          <SheetSection
            top={17.23}
            bottom="Ожидание"
            // bottom={
            //   !editMode ? (
            //     data.status
            //   ) : (
            //     <select onChange={(e) => setStatusSelected(e.target.value)}>
            //       {STATUSES.map((item) => (
            //         <option
            //           key={item.value}
            //           selected={statusSelected == item.value}
            //           value={item.value}
            //         >
            //           {item.value}
            //         </option>
            //       ))}
            //     </select>
            //   )
            // }
          />
          <SheetSection
            top={
              !editMode ? (
                data.persons
              ) : (
                <input
                  ref={personsRef}
                  value={reserve.persons}
                  onChange={(e) => {
                    setReserve({ ...reserve, persons: e.target.value });
                  }}
                  className="myInput"
                  type="number"
                />
              )
            }
            bottom={
              !editMode ? (
                data.time
              ) : (
                <input
                  value={reserve.time}
                  onChange={(e) => {
                    setReserve({ ...reserve, time: e.target.value });
                  }}
                  className="myInput"
                  type="time"
                />
              )
            }
            iconTo={<MyImage height="24px" width="24px" imageSrc={Group} />}
            iconBottom={
              <MyImage height="24px" width="24px" imageSrc={Schedule} />
            }
          />
          <SheetSection
            top={
              !editMode ? (
                data.name
              ) : (
                <input
                  value={reserve.name}
                  onChange={(e) => {
                    setReserve({ ...reserve, name: e.target.value });
                  }}
                  className="myInput"
                  type="text"
                />
              )
            }
            bottom={
              !editMode ? (
                convertedPhone(data.phone)
              ) : (
                <InputMask
                  mask="+7 (999) 999-99-99"
                  onChange={(e) => {
                    setReserve({
                      ...reserve,
                      phone: e.target.value.replace(/[^\d]/g, ""),
                    });
                  }}
                  value={reserve.phone}
                  className="myInput"
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
                "Основной зал, " + data.room
              ) : (
                <input
                  value={reserve.room}
                  onChange={(e) => {
                    setReserve({ ...reserve, room: e.target.value });
                  }}
                  className="myInput"
                  type="text"
                />
              )
            }
            bottom={null}
            iconTo={<MyImage height="24px" width="24px" imageSrc={Table} />}
          />
          <SheetSection
            top={moment(data.created_at)
              .add(moment.duration(1000))
              .format("MM.DD.YYYY HH:mm")}
            iconTo={"Создан "}
            bottom={null}
          />

          {!editMode ? (
            <button
              onClick={() => {
                seteditMode(!editMode);
              }}
              className="sheet__section"
              title="Изменить"
            >
              <MyImage height="24px" width="24px" imageSrc={BorderColor} />
            </button>
          ) : (
            <div className="sheet__section">
              <div
                onClick={() => {
                  updateReserve(data._id, reserve);
                  seteditMode(!editMode);
                }}
                className="sheet__button_checkMark"
                title="Изменить"
              >
                <MyImage height="24px" width="24px" imageSrc={CheckMark} />
              </div>
              <div
                onClick={() => {
                  removeReserve(data._id);
                }}
                className="sheet__button_basket"
                title="Удалить"
              >
                <MyImage height="24px" width="24px" imageSrc={Basket} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderSheet;
