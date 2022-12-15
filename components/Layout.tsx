import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props: { children: ReactNode }) => {
  const { children } = props;

  return (
    <>
      <Navbar />
      <main className='flex flex-col justify-start items-start'>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
