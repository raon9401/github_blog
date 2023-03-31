import { Sidenav } from "../components/Sidenav/Sidenav";

interface GeneralLayoutProps {
  children: React.ReactNode;
}

export const GeneralLayout = ({ children }: GeneralLayoutProps) => {
  return (
    <nav className="w-full h-full flex flex-grow">
      <Sidenav />
      {children}
    </nav>
  );
};
