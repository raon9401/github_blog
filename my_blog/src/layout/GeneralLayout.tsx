import { Sidenav } from "../components/Sidenav/Sidenav";

interface GeneralLayoutProps {
  children: React.ReactNode;
}

export const GeneralLayout = ({ children }: GeneralLayoutProps) => {
  return (
    <section className="w-full h-full flex flex-col">
      <Sidenav />
      {children}
    </section>
  );
};
