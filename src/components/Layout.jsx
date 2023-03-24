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
      <div className="xl:w-[1150px] xl:mx-auto">{children}</div>
    </>
  );
};

export default Layout;
