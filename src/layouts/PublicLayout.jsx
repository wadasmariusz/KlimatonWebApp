import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const PublicLayout = () => {
  return (
    <>
      <Helmet>
        <title>Strona główna | Connected City</title>
      </Helmet>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicLayout;
