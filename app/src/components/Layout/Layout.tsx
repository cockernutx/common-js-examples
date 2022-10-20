import React from "react";
import NavMenu from "../NavMenu/NavMenu";



interface LayoutProps {
  children?: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <NavMenu />

      {children}
    </div>
  );
}

export default Layout;
