import { BsGearWideConnected } from "react-icons/bs";
import { useEffect, useState } from "react";
import { PortFolioContents } from "../components/PortFolio/Basic/PortFolioContents";
import { MOCK_PORTFOLIO_LIST } from "../constants/mock";
import {
  SmallPortFolioContentsLeft,
  SmallPortFolioContentsRight,
} from "../components/PortFolio/Small/SmallPortFolioContents";

export const PortFolioPage = () => {
  const [cardNum, setCardNum] = useState<number>(0);
  const [isTurn, setIsTurn] = useState<-1 | 0 | 1>(0);

  useEffect(() => {
    if (isTurn !== 0) {
      setTimeout(() => {
        setIsTurn(0);
      }, 1000);
    }
  }, [isTurn]);

  return (
    <section className="contents_base flex justify-center items-center bg-slate-200 relative overflow-hidden">
      <BsGearWideConnected
        size="500"
        className={`${isTurn === 1 && "animate-turnRight"} ${
          isTurn === -1 && "animate-turnLeft"
        } opacity-25`}
      />
      <article className="absolute flex flex-grow">
        {MOCK_PORTFOLIO_LIST.map((item, index) => (
          <div
            key={item}
            className={`${cardNum === 0 && index === 0 && "pl-60"} ${
              cardNum === MOCK_PORTFOLIO_LIST.length - 1 &&
              index === MOCK_PORTFOLIO_LIST.length - 1 &&
              "pr-60"
            }`}
          >
            {index === cardNum ? (
              <PortFolioContents>{item}</PortFolioContents>
            ) : index === cardNum + 1 ? (
              <SmallPortFolioContentsRight
                cardNum={cardNum}
                isTurn={isTurn}
                setCardNum={setCardNum}
                setIsTurn={setIsTurn}
              >
                {item}
              </SmallPortFolioContentsRight>
            ) : (
              index === cardNum - 1 && (
                <SmallPortFolioContentsLeft
                  key={item}
                  cardNum={cardNum}
                  isTurn={isTurn}
                  setCardNum={setCardNum}
                  setIsTurn={setIsTurn}
                >
                  {item}
                </SmallPortFolioContentsLeft>
              )
            )}
          </div>
        ))}
      </article>
    </section>
  );
};
