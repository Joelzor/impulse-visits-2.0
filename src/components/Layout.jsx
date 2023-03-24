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
      {children}
    </>
  );
};

export default Layout;
