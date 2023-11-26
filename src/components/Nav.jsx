import React from "react";
import Container from "./Container";
import { MdLocalMovies } from "react-icons/md";
import Link from "next/link";
function Nav() {
  return (
    <Container>
      <div className="w-full absolute nav__logo rounded-full bg-gray-800 bg-opacity-70  py-5 px-10 my-10 flex items-center text-white justify-between ">
        <Link href={"/home"} className="flex items-center">
          <MdLocalMovies fontSize={25} />
          <span className="text-xl">MovieTv</span>
        </Link>
        <div>
          <Link href={"/signup"} className="text-md pr-3">
            Sign Up
          </Link>
          <Link href={"/login"} className="py-2 px-5 bg-red-500 rounded-3xl">
            Login
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Nav;
