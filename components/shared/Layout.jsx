import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
const Layout = ({ children }) => {
  return (
    <div className="bg-background container border-b-4 border-b-gray-300 pt-4">
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Navbar />
      <div className="w-full">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
