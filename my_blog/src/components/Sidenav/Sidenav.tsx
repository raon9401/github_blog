import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { handleWebPageLink } from "../../hooks/handleLink";
import { ROUTER_DATA } from "../../routers/RouterData";

export const Sidenav = () => {
  return (
    <nav className="side_nav">
      <section>
        <p className="border-b-2 font-bold text-xl py-3">Raon9401 Blog</p>
        <div className="flex flex-col pt-20 gap-3">
          {ROUTER_DATA.map((item) => (
            <Link key={item.id} to={item.path}>
              {item.label}
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
