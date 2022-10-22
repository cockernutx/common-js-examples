import React from "react";
import { Container } from "react-bootstrap";
import { ComponentBackground } from "../Common/Common.styled";
import NavMenu from "../NavMenu/NavMenu";



interface LayoutProps {
  children?: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavMenu />

          {children}

    </>
  );
}

export default Layout;
