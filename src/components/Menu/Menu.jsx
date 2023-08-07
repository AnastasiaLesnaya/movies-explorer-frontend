import "./Menu.css";

function Menu({ click, handleMenu }) {
  return (
    <div className="menu menu_hidden">
    <div
      className={
        click ? "menu__icon menu__icon_active" : "menu__icon"
      }
      onClick={handleMenu}
    >
      <div
        className="menu__btn menu__btn_close"
      />
    </div>
    </div>
  );
}

export default Menu;