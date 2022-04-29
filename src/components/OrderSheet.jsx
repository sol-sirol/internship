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
          />
          <SheetSection
            top={props.data.customer}
            bottom={props.data.phoneCustomer}
          />
          <SheetSection top={props.data.place} bottom={null} />
          <SheetSection top={props.data.created} bottom={null} />
          <button className="sheet__section" title="Изменить">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 20.0156H24V24H0V20.0156ZM20.7188 4.03125L18.75 6L15 2.25L16.9688 0.28125C17.1562 0.09375 17.3906 0 17.6719 0C17.9531 0 18.1875 0.09375 18.375 0.28125L20.7188 2.625C20.9062 2.8125 21 3.04688 21 3.32812C21 3.60938 20.9062 3.84375 20.7188 4.03125ZM17.7656 6.98438L7.73438 17.0156H3.98438V13.2656L14.0156 3.23438L17.7656 6.98438Z"
                fill="#666666"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSheet;
