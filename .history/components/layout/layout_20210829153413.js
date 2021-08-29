import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Hamburger from "hamburger-react";
// import ProtectedRoute from "../reusable/ProtectedRoute";

const Layout = ({ children, title = "Dashboard" }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div className="hidden md:block bg-dashboard ">
        <div className="mx-4">
          <div className="w-full flex justify-between px-6">
            <p className="text-3xl font-extrabold">shoppify</p>

            <div className="flex">
              <p className="mr-8">Home</p>
              <p className="">Shop</p>
            </div>
          </div>
          <div className="my-3">{children}</div>
          <div className="flex justify-center items-center h-14">
            <p className="text-3xl font-semibold">shoppify</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
