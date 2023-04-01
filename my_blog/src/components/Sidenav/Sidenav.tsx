import { BsGithub } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { handleWebPageLink } from "../../hooks/handleLink";
import { ROUTER_DATA } from "../../constants/RouterData";

export const Sidenav = () => {
  const location = useLocation();

  return (
    <nav className="side_nav w-64">
      <section>
        <p className="border-b-2 font-bold text-xl py-3">Raon9401 Blog</p>
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
      </section>
      <section className="border-t-2 p-5 flex justify-center items-center">
        <BsGithub
          size="28"
          className="hover:fill-orange-400 cursor-pointer"
          onClick={() => handleWebPageLink("https://github.com/raon9401")}
        />
      </section>
    </nav>
  );
};
