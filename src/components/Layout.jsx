import Header from "./Header";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  if (router.pathname === "/") {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <div className="xl:w-[1150px] lg:mx-auto p-2">{children}</div>
    </>
  );
};

export default Layout;
