import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Hamburger from "hamburger-react";
import { useRouter } from "next/dist/client/router";
import {
  selectCartItemsCount,
  selectHidden,
} from "../../redux/cart/cart.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { ShoppingBag } from "heroicons-react";
// import ProtectedRoute from "../reusable/ProtectedRoute";

const Layout = ({
  children,
  toggleCartHidden,
  title = "Dashboard",
  cartCount,
  hidden
}) => {
  const [isOpen, setOpen] = useState(false);
  const route = useRouter();
  return (
    <div>
      <div className="md:block bg-dashboard h-24">
        <div className="mx-4 h-full relative">
          <div className="w-full flex justify-between px-6 items-center bg-white h-20 right-0 top-0 z-50 fixed">
            <p
              className="text-3xl font-extrabold cursor-pointer"
              onClick={() => {
                route.push("/");
              }}
            >
              SHoppify
            </p>

            <div className="flex font-semibold">
              <p
                className="mr-8 cursor-pointer"
                onClick={() => {
                  route.push("/");
                }}
              >
                Home
              </p>
              <p
                className="cursor-pointer"
                onClick={() => {
                  route.push("/shop");
                }}
              >
                Shop
              </p>
              <p className="ml-3 cursor-pointer flex" onClick={toggleCartHidden}>
                <ShoppingBag/> {cartCount}
              </p>
              {hidden ? null : <CartDropdown />}
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

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  hidden: selectHidden,
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
