import { Contents } from "../_Contents/Contents";

type PortFolioProps = {
  children: string;
};

export const PortFolioContents = ({ children }: PortFolioProps) => {
  return (
    <section className="portfolio_card">
      <Contents>{children}</Contents>
    </section>
  );
};
