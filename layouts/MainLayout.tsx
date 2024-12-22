import React from "react";
import { Header, Footer } from "@/components/layout";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";

interface MainLayoutProps {
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, customStyle }) => {
  return (
    <div className={"pageWrapper"} style={customStyle}>
      <Header />
        <Toaster position="bottom-right" />
        {children}
      <Footer />
    </div>
  );
};



export default MainLayout;