import { MyHeader } from "./Header";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MyHeader />
      <main>{children}</main>
    </>
  );
};
