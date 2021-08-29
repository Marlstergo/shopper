import React from "react";
import Head from "next/head";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ProductItem from "../../components/ProductItem/ProductItem";
import { selectProducts } from "../../redux/user/user.selector";

const Shop = ({ products }) => {
  return (
    <div>
      <div className="">
        <h2 className="">Welcome to SHopper Shop page</h2>
        <p>Browse through our collection of exotic products</p>
      </div>
      <div className="h-[400px]">
        <div>
          <div>
            <h2>Mens's Clothing</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            {products.filter(item => item.category === "men's clothing")
            .filter((p, i) => i < 5 )
            .map(
              (prod) => (
                <ProductItem product={prod}/>
              )
            )}
          </div>
        </div >
        <div className="h-[400px]">
          <div>
            <h2>Jewelery</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            {products.filter(item => item.category === "jewelery").map(
              (prod) => (
                <ProductItem product={prod}/>
              )
            )}
          </div>
        </div>
        <div className="h-[400px]">
          <div>
            <h2>Electronics</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            {products.filter(item => item.category === "women's clothing").map(
              (prod) => (
                <ProductItem product={prod}/>
              )
            )}
          </div>
        </div>
        <div className="h-[400px]">
          <div>
            <h2>Women's Clothing</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            {products.filter(item => item.category === "electronics").map(
              (prod) => (
                <ProductItem product={prod}/>
              )
            )}
          </div>
        </div>
        <div className="h-[400px]">
          <div>
            <h2>Misc</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            {products.map(
              (prod) => (
                <ProductItem product={prod}/>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  // googleSignInStart: () => dispatch(googleSignInStart()),
});

const mapStateToProps = createStructuredSelector({
  products: selectProducts,
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
