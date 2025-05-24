import { FC, ReactNode } from "react";
import scss from "./LayoutSide.module.scss";
import Header from "./Header/Header";

interface LovePage {
  children: ReactNode;
}

const LayoutSide: FC<LovePage> = ({ children }) => {
  return (
    <div className={scss.LayoutSide}>
      <Header/>
      <main>{children}</main>
    </div>
  );
};

export default LayoutSide;
