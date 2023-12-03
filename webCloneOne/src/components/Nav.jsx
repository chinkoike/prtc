import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
const Nav = () => {
  const [isShow, setIsshow] = useState(false);
  const show = "";

  return (
    <>
      <div className="text-2xl  ">
        <div className="mx-auto flex justify-between ">
          <ul
            className={
              isShow
                ? "translate-y-[-200px] duration-300 relative flex mx-auto justify-center p-8 space-x-6 cursor-pointer w-full "
                : "relative flex mx-auto duration-300 justify-center p-8 space-x-6 cursor-pointer w-full  "
            }
          >
            <li className=" text-white/50 hover:text-white duration-300 ">
              ABOUT ME
            </li>
            <li className=" text-white/50 hover:text-white duration-300">
              CONTACT
            </li>
            <li className=" text-white/50 hover:text-white duration-300">
              GITHUB
            </li>
          </ul>

          {isShow ? (
            <AiOutlineMenu
              onClick={() => setIsshow(!isShow)}
              className="text-white/50 hover:text-white duration-300 absolute text-5xl right-4 top-6 md:right-8 md:top-6 "
            />
          ) : (
            <RxCross1
              onClick={() => setIsshow(!isShow)}
              className="text-white/50 hover:text-white duration-300 absolute text-5xl right-4 top-6 md:right-8 md:top-6"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
