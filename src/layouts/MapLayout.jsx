import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/common/Header";

const PublicLayout = () => {
  return (
    <>
      <Helmet>
        <title>Strona główna | Klimaton</title>
      </Helmet>
      <Header />
      <Outlet />
    </>
  );
};

export default PublicLayout;
