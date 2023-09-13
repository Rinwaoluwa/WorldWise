import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import Copyright from "./Copyright";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      
      <AppNav />

      <Outlet /> 

      <Copyright />
    </div>
  );
}


export default Sidebar;