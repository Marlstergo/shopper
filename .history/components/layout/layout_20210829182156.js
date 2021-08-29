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
      <div className="hidden md:block bg-dashboard h-24">
        <div className="mx-4 h-full relative">
          <div className="w-full flex justify-between px-6 items-center h-full absolute top-0">
            <p
              className="text-3xl font-extrabold"
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
              <p className="ml-3" onClick={toggleCartHidden}>
                cart: {cartCount}
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
