import React from "react";
// import Layout from "@/layout/Layout";
import ErrorComponent from "@/components/ErrorComponent";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const error = () => {
  return (
    <>
      <Header />
      <ErrorComponent />
      <Footer />
      {/* </Layout> */}
    </>
  );
};

export default error;
