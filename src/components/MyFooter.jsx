import Reserves from "../store/Reserves";

const MyFooter = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__container">
          <div className="footer__body">
            Общее количество резервов: {Reserves.numberReserves}(18). Всего
            гостей: {Reserves.numberGuests}(52)
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
