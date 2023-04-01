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
    <section className="smallportfoilo_card" onClick={handleTurnRight}>
      {children}
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
    <section className="smallportfoilo_card" onClick={handleTurnLeft}>
      {children}
    </section>
  );
};
