import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Hamburger from "hamburger-react";
import { useRouter } from "next/dist/client/router";
// import ProtectedRoute from "../reusable/ProtectedRoute";

const Layout = ({ children, title = "Dashboard" }) => {
  const [isOpen, setOpen] = useState(false);
  const route = useRouter()
  return (
    <div>
      <div className="hidden md:block bg-dashboard h-24">
        <div className="mx-4 h-full">
          <div className="w-full flex justify-between px-6 items-center h-full">
            <p className="text-3xl font-extrabold"
            onClick={() => {route.push('/')}}
            >SHoppify</p>

            <div className="flex font-semibold">
              <p className="mr-8 cursor-pointer"
              onClick={() => {route.push('/')}}
              >Home</p>
              <p className="cursor-pointer"
              onClick={() => {route.push('/shop')}}
              >Shop</p>
              <p className="ml-3">cart</p>
            </div>
          </div>
          <div className="my-3">{children}</div>
          <div className="flex justify-center items-center h-14">
            <p className="text-3xl font-semibold">SHoppify</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
