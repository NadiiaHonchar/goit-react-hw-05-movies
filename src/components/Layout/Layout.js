import { NavLink, Outlet } from "react-router-dom";
import style from "./Layout.module.css";

const setActive = ({isActive})=>isActive? style.active:style.elementNav;

const Layout = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.containerHeader}>
          <nav className={style.nav}>
            <ul className={style.list}>
              <li className={style.listNav}>
                <NavLink to="/" className={setActive}>Home</NavLink>
              </li>
              <li className={style.listNav}>
                <NavLink to="/movies" className={setActive}>Movies</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        {/* <container className={style.container}></container> */}
      </main>
      <Outlet />
    </>
  );
};

export default Layout;
