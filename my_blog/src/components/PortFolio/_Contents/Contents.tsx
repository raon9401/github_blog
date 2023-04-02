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
      {/* 컨텐츠 header */}
      <section className="font-bold flex justify-between">
        <span>{children}</span>
        {size === "basic" && setOpenDetail && (
          <button type="button" onClick={() => setOpenDetail(true)}>
            자세히 보기
          </button>
        )}
      </section>
      {/* 컨텐츠 이미지 */}
      <section className="border-2 h-60 bg-slate-100 rounded-xl cursor-pointer">
        메인컨텐츠 이미지
      </section>
      {/* 컨텐츠 footer */}
      <section className="p-4 flex justify-center items-center">
        <article className="flex flex-col justify-center items-center hover:text-orange-400">
          <BsGithub
            size="28"
            className="hover:fill-orange-400 cursor-pointer"
            onClick={() => handleWebPageLink("https://github.com/raon9401")}
          />
          <span className="text-xs cursor-pointer">github</span>
        </article>
      </section>
    </>
  );
};
