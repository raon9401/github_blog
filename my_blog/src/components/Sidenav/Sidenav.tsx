import { BsGithub } from "react-icons/bs";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { MdPlaylistAdd } from "react-icons/md";

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { handleWebPageLink } from "../../hooks/handleLink";
import { ROUTER_DATA } from "../../constants/RouterData";

export const Sidenav = () => {
  const [isHide, setIsHide] = useState<boolean>(true);
  const location = useLocation();

  return (
    <nav>
      {isHide && (
        <section
          className={`side_nav w-64 bg-white absolute z-10 animate-openSideNav`}
        >
          <article>
            <div className="flex justify-between items-center border-b-2">
              <p className="font-bold text-xl py-3">Raon9401 Blog</p>
              <RxDoubleArrowLeft
                size="22"
                className="cursor-pointer"
                onClick={() => setIsHide(false)}
              />
            </div>
            <div className="flex flex-col pt-10">
              {ROUTER_DATA.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`py-2 hover:bg-slate-300  ${
                    location.pathname === item.path
                      ? "bg-slate-300"
                      : "active:bg-slate-400"
                  }`}
                >
                  <span className="pl-2">{item.label}</span>
                </Link>
              ))}
            </div>
          </article>
          <article className="border-t-2 p-5 flex justify-center items-center">
            <BsGithub
              size="28"
              className="hover:fill-orange-400 cursor-pointer"
              onClick={() => handleWebPageLink("https://github.com/raon9401")}
            />
          </article>
        </section>
      )}
      {!isHide && (
        <section
          className="cursor-pointer m-3 absolute z-10 rounded-full bg-white p-1 opacity-70 hover:bg-gray-100 shadow-lg active:shadow-md"
          onClick={() => setIsHide(true)}
        >
          <MdPlaylistAdd size="30" />
        </section>
      )}
    </nav>
  );
};
