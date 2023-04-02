import { BsGearWideConnected } from "react-icons/bs";
import { useEffect, useState } from "react";
import { PortFolioContents } from "../components/PortFolio/Basic/PortFolioContents";
import { MOCK_PORTFOLIO_LIST } from "../constants/mock";
import { SmallPortFolioContents } from "../components/PortFolio/Small/SmallPortFolioContents";
import { ContentsDetail } from "../components/PortFolio/_Contents/Detail/ContentsDetail";

export const PortFolioPage = () => {
  const [cardNum, setCardNum] = useState<number>(0);
  const [isTurn, setIsTurn] = useState<"leftTurn" | "stop" | "rightTurn">(
    "stop"
  );
  const [openDetail, setOpenDetail] = useState<boolean>(false);

  const PORTFOLIO_LENGTH = MOCK_PORTFOLIO_LIST.length;
  const tailList = [
    MOCK_PORTFOLIO_LIST[0],
    MOCK_PORTFOLIO_LIST[PORTFOLIO_LENGTH - 1],
  ];
  useEffect(() => {
    if (isTurn !== "stop") {
      setTimeout(() => {
        setIsTurn("stop");
      }, 500);
    }
  }, [isTurn]);

  return (
    <section className="contents_base flex justify-center items-center bg-slate-200 relative overflow-hidden">
      <BsGearWideConnected
        size="500"
        className={`${isTurn === "rightTurn" && "animate-turnRight"} ${
          isTurn === "leftTurn" && "animate-turnLeft"
        } opacity-25`}
      />
      <article className="absolute flex flex-grow">
        {MOCK_PORTFOLIO_LIST.map((item, index) => (
          <div key={item}>
            {index === cardNum ? (
              cardNum === 0 ? (
                <div className="flex flex-row">
                  <SmallPortFolioContents
                    cardNum={PORTFOLIO_LENGTH}
                    direction="left"
                    isTurn={isTurn}
                    setCardNum={setCardNum}
                    setIsTurn={setIsTurn}
                  >
                    {tailList[1]}
                  </SmallPortFolioContents>
                  <PortFolioContents setOpenDetail={setOpenDetail}>
                    {item}
                  </PortFolioContents>
                </div>
              ) : cardNum === PORTFOLIO_LENGTH - 1 ? (
                <div className="flex flex-row">
                  <PortFolioContents setOpenDetail={setOpenDetail}>
                    {item}
                  </PortFolioContents>
                  <SmallPortFolioContents
                    cardNum={-1}
                    direction="right"
                    isTurn={isTurn}
                    setCardNum={setCardNum}
                    setIsTurn={setIsTurn}
                  >
                    {tailList[0]}
                  </SmallPortFolioContents>
                </div>
              ) : (
                <PortFolioContents setOpenDetail={setOpenDetail}>
                  {item}
                </PortFolioContents>
              )
            ) : index === cardNum + 1 ? (
              <SmallPortFolioContents
                cardNum={cardNum}
                direction="right"
                isTurn={isTurn}
                setCardNum={setCardNum}
                setIsTurn={setIsTurn}
              >
                {item}
              </SmallPortFolioContents>
            ) : (
              index === cardNum - 1 && (
                <SmallPortFolioContents
                  cardNum={cardNum}
                  direction="left"
                  isTurn={isTurn}
                  setCardNum={setCardNum}
                  setIsTurn={setIsTurn}
                >
                  {item}
                </SmallPortFolioContents>
              )
            )}
          </div>
        ))}
      </article>
      {openDetail && <ContentsDetail setOpenDetail={setOpenDetail} />}
    </section>
  );
};
