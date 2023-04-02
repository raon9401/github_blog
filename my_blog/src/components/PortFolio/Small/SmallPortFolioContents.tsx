import { SmallContents } from "../_Contents/SmallDesign/SmallContents";

type PortFolioProps = {
  children: string;
  direction: string;
  cardNum: number;
  isTurn: "leftTurn" | "stop" | "rightTurn";
  setIsTurn: React.Dispatch<
    React.SetStateAction<"leftTurn" | "stop" | "rightTurn">
  >;
  setCardNum: React.Dispatch<React.SetStateAction<number>>;
};

export const SmallPortFolioContents = ({
  children,
  direction,
  cardNum,
  isTurn,
  setIsTurn,
  setCardNum,
}: PortFolioProps) => {
  const handleTurn = () => {
    if (isTurn === "stop" && direction === "right") {
      setCardNum(cardNum + 1);
      setIsTurn("rightTurn");
    }
    if (isTurn === "stop" && direction === "left") {
      setCardNum(cardNum - 1);
      setIsTurn("leftTurn");
    }
  };

  return (
    <section className="portfolio_card smallportfolio" onClick={handleTurn}>
      <div className="pointer-events-none space-y-2 ">
        <SmallContents>{children}</SmallContents>
      </div>
    </section>
  );
};
