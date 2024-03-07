import { ReactElement } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type LayoutTypes = {
  children: ReactElement;
};
export const Layout: React.FC<LayoutTypes> = ({ children }) => {
  return (
    <div className="container-layout">
      <Header />
      <main className="content-layout">{children}</main>
      <Footer />
    </div>
  );
};
