import { BsGithub } from "react-icons/bs";
import { handleWebPageLink } from "../../../hooks/handleLink";

type PortFolioProps = {
  children: string;
  size: "basic" | "small";
  setOpenDetail?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Contents = ({ children, setOpenDetail, size }: PortFolioProps) => {
  return (
    <>
      <section className="font-bold border-b-2 flex justify-between">
        <span>{children}</span>
        {size === "basic" && setOpenDetail && (
          <button type="button" onClick={() => setOpenDetail(true)}>
            자세히 보기
          </button>
        )}
      </section>
      <section className="border-2 h-60 bg-slate-100 hover:opacity-20 cursor-pointer">
        메인컨텐츠 이미지
      </section>
      <section className="border-t-2">
        <article className="p-4 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center hover:text-orange-400">
            <BsGithub
              size="28"
              className="hover:fill-orange-400 cursor-pointer"
              onClick={() => handleWebPageLink("https://github.com/raon9401")}
            />
            <span className="text-xs cursor-pointer">github</span>
          </div>
        </article>
      </section>
    </>
  );
};
