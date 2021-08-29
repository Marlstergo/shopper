import { useRouter } from "next/dist/client/router";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectProducts } from "../../redux/user/user.selector";
import Head from "next/head";
import Image from "next/image";

const Product = ({ products }) => {
  const route = useRouter();
  const prodItem = products.filter(
    (p, i) => p.id == window.location.pathname.split("/")[2]
  )[0];

  console.log(prodItem);
  console.log(products);
  console.log(window.location.pathname.split("/")[2]);
  return (
    <>
      <div>
        <div>
          <div>
            <h2 className="text-3xl font-semibold">{prodItem.title}</h2>
          </div>
          <div className="flex flex-col md:flex-row h-[400px]">
            <div className="md:w-1/2 relative">
              {" "}
              <Image src={prodItem.image} height="380" width="380" />{" "}
            </div>
            <div className="md:w-1/2 flex flex-col items-start space-y-6  justify-center text-left">
              <h3 className="text-xl font-semibold">{prodItem.title}</h3>
              <p className="text-sm">{prodItem.description}</p>
              <p className="text-xl font-semibold">${prodItem.price}</p>
              <button className="mx-3 my-2 bg-gray-700 hover:bg-gray-900">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  // googleSignInStart: () => dispatch(googleSignInStart()),
});

const mapStateToProps = createStructuredSelector({
  products: selectProducts,
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
