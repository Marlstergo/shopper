import { useRouter } from "next/dist/client/router";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectProducts } from "../../redux/user/user.selector";
import Head from "next/head";
import Image from "next/image";
import { addItem } from "../../redux/cart/cart.action";
import ReactStars from "react-stars";

const Product = ({ products, additem }) => {
  const route = useRouter();
  const prodItem = products.filter(
    (p, i) => p.id == window.location.pathname.split("/")[2]
  )[0];
  const settings = {
    size: 24,
    count: Math.round(prodItem.rating.rate),
    color: "green",
    activeColor: "green",
    edit: false,
    a11y: true,
    
  };

  console.log(prodItem);
  console.log(products);
  console.log(window.location.pathname.split("/")[2]);
  return (
    <>
      <div>
        <div>
          <div>
            <h2 className="text-3xl mb-8 font-semibold">{prodItem.title}</h2>
          </div>
          <div className="flex flex-col md:flex-row h-[400px]">
            <div className="md:w-1/2 relative">
              {" "}
              <Image src={prodItem.image} height="380" width="380" />{" "}
            </div>
            <div className="md:w-1/2 flex flex-col items-start space-y-6  justify-center text-left">
              <h3 className="text-xl font-semibold">{prodItem.title}</h3>
              <p className="text-sm"> Category: {prodItem.category}</p>
              <p className="text-sm"> Rating: {"  "} {<ReactStars {...settings}/>}</p>

              <p className="text-sm">{prodItem.description}</p>
              <p className="text-xl font-semibold">${prodItem.price}</p>
              <button className="px-3 rounded-lg text-white py-2 bg-gray-700 hover:bg-gray-900"
              onClick={() => {
                additem(prodItem)
              }}
              >Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  additem: (prod) => dispatch(addItem(prod)),
});

const mapStateToProps = createStructuredSelector({
  products: selectProducts,
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
