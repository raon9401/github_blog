import { Contents } from "../_Contents/Contents";

type PortFolioProps = {
  children: string;
  cardNum: number;
  isTurn: -1 | 0 | 1;
  setIsTurn: React.Dispatch<React.SetStateAction<-1 | 0 | 1>>;
  setCardNum: React.Dispatch<React.SetStateAction<number>>;
};

export const SmallPortFolioContentsRight = ({
  children,
  cardNum,
  isTurn,
  setIsTurn,
  setCardNum,
}: PortFolioProps) => {
  const handleTurnRight = () => {
    if (isTurn === 0) {
      setCardNum(cardNum + 1);
      setIsTurn(1);
    }
  };

  return (
    <section
      className="portfolio_card smallportfolio  animate-moving"
      onClick={handleTurnRight}
    >
      <div className="pointer-events-none space-y-2 ">
        <Contents>{children}</Contents>
      </div>
    </section>
  );
};

export const SmallPortFolioContentsLeft = ({
  children,
  cardNum,
  isTurn,
  setIsTurn,
  setCardNum,
}: PortFolioProps) => {
  const handleTurnLeft = () => {
    if (isTurn === 0) {
      setCardNum(cardNum - 1);
      setIsTurn(-1);
    }
  };

  return (
    <section className="portfolio_card smallportfolio" onClick={handleTurnLeft}>
      <div className="pointer-events-none space-y-2">
        <Contents>{children}</Contents>
      </div>
    </section>
  );
};
