import { Contents } from "../_Contents/Contents";

type PortFolioProps = {
  children: string;
  setOpenDetail: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PortFolioContents = ({
  children,
  setOpenDetail,
}: PortFolioProps) => {
  return (
    <section className="portfolio_card">
      <Contents setOpenDetail={setOpenDetail} size="basic">
        {children}
      </Contents>
    </section>
  );
};
