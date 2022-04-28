const HeaderButton = (props) => {
  return (
    <button
      className="header__button header__button_standard"
      title={props.title}
    >
      {props.children}
    </button>
  );
};

export default HeaderButton;
