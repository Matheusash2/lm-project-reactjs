import { ReactElement, useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MenuOptions } from "./MenuOptions";

type LayoutTypesProps = {
  children: ReactElement;
  isHome?: boolean;
};
export const Layout: React.FC<LayoutTypesProps> = ({ children, isHome }) => {
  const mobile = window.innerWidth <= 768;
  const [isOpen, setIsOpen] = useState(true);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container-layout">
      <Header onToggleMenu={toggleMenu} isOpen={isOpen}/>
      <div className="content-layout">
        {mobile && isHome && <MenuOptions />}
        {!mobile && isOpen && <MenuOptions />}
        {(!mobile || !isHome) && <main className="content">{children}</main>}
      </div>
      <Footer />
    </div>
  );
};
