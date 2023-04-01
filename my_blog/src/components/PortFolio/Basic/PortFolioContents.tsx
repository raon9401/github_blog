type PortFolioProps = {
  children: string;
};

export const PortFolioContents = ({ children }: PortFolioProps) => {
  return <section className="portfoilo_card">{children}</section>;
};
