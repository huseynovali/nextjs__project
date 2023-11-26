import React from "react";
import Container from "./Container";

function Nav() {
  return (
    <Container col={"fluid"} color="#aaa">
      <div className="nav__logo rounded-full bg-cyan-200 w-[70px] h-[70px] flex items-center justify-center">
        MovieTv
      </div>
    </Container>
  );
}

export default Nav;
