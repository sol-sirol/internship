import SheetSection from "./SheetSection";
import { useEffect, useState, useRef } from "react";
import InputMask from "react-input-mask";
import MyImage from "./UI/MyImage";
import moment from "moment";
import { Button, Input, InputNumber, TimePicker, notification } from "antd";

import Group from "../assets/images/sheet/group.svg";
import Schedule from "../assets/images/sheet/schedule.svg";
import AccountBox from "../assets/images/sheet/account_box.svg";
import LocalPhone from "../assets/images/sheet/local_phone.svg";
import Table from "../assets/images/sheet/table.svg";
import BorderColor from "../assets/images/sheet/border_color.svg";
import CheckMark from "../assets/images/sheet/check_mark.svg";
import Basket from "../assets/images/sheet/basket.svg";

const emptyPlaylistError = () => {
  notification.error({
    message: "Ошибка",
    description: "Заполните все поля",
    placement: "top",
    onClick: () => {
      console.log("Ошибка! Заполните все поля.");
    },
  });
};

const OrderSheet = ({
  data,
  removeReserve,
  updateReserve,
  createReserve,
  reloadReserves,
}) => {
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

    const ff = convertedPhone.join("");

    return ff;
  };

  return (
    <div className={"sheet" + (editMode ? " " + "sheet_update" : "")}>
      <div className="sheet__wrapper">
        <div className="sheet__body">
          <SheetSection top={17.23} bottom="Ожидание" />
          <SheetSection
            top={
              !editMode ? (
                data.persons
              ) : (
                <InputNumber
                  //ref={personsRef}
                  autoFocus
                  value={reserve.persons}
                  onChange={(number) => {
                    setReserve({ ...reserve, persons: number });
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
                <TimePicker
                  minuteStep={5}
                  format={"HH:mm"}
                  allowClear={false}
                  value={moment(reserve.time, "HH:mm")}
                  onChange={(newTime) => {
                    setReserve({
                      ...reserve,
                      time: moment(newTime, "HH:mm:ss").format("HH:mm"),
                    });
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
                <Input
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
                <Input
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
            <Button
              onClick={() => {
                seteditMode(!editMode);
              }}
              className="sheet__section sheet__section_button"
              title="Изменить"
            >
              <MyImage height="24px" width="24px" imageSrc={BorderColor} />
            </Button>
          ) : (
            <div className="sheet__section">
              <Button
                onClick={() => {
                  if (
                    !(
                      reserve.name &&
                      reserve.persons &&
                      reserve.phone &&
                      reserve.room
                    )
                  ) {
                    emptyPlaylistError();
                    return;
                  }

                  if (reserve.ferstStap) {
                    reserve.ferstStap = false;
                    createReserve(reserve);
                  } else {
                    updateReserve(data._id, reserve);
                  }
                  seteditMode(!editMode);
                }}
                className="sheet__button_checkMark"
                title="Изменить"
              >
                <MyImage height="24px" width="24px" imageSrc={CheckMark} />
              </Button>
              <Button
                danger
                onClick={() => {
                  if (reserve.ferstStap) {
                    reloadReserves();
                  } else {
                    removeReserve(data._id);
                  }
                }}
                className="sheet__button_basket"
                title="Удалить"
              >
                <MyImage height="24px" width="24px" imageSrc={Basket} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderSheet;
