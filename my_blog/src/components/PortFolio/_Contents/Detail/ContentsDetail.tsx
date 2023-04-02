import { AiFillCloseCircle } from "react-icons/ai";
import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";

type ContentsDetailProps = {
  setOpenDetail: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ContentsDetail = ({ setOpenDetail }: ContentsDetailProps) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/md/mock2.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="w-full h-full absolute flex justify-center items-center">
      <section className="contents_detail border-2">
        <article>
          <button
            type="button"
            className="absolute right-3 hover:opacity-70 "
            onClick={() => setOpenDetail(false)}
          >
            <AiFillCloseCircle size="30" className="active:scale-90" />
          </button>
        </article>
        <h1 className="pb-5 text-2xl font-semibold">제목</h1>
        <Markdown>{content}</Markdown>
      </section>
    </div>
  );
};
