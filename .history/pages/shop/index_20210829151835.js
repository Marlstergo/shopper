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
      <div className="min-h-[80vh]">
        <div>
          <div>
            <h2 className="text-3xl">Mens's Clothing</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 ">
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
            <h2 className="text-3xl">Jewelery</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 ">
            {products.filter(item => item.category === "jewelery")
            .filter((p, i) => i < 5 )
            .map(
              (prod) => (
                <ProductItem product={prod}/>
              )
            )}
          </div>
        </div>
        <div className="h-[400px]">
          <div>
            <h2 className="text-3xl">Women's Clothing</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 ">
            {products.filter(item => item.category === "women's clothing")
            .filter((p, i) => i < 4 )
            .map(
              (prod) => (
                <ProductItem product={prod}/>
              )
            )}
          </div>
        </div>
        <div className="h-[400px]">
          <div>
            <h2 className="text-3xl">Electronics</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 ">
            {products.filter(item => item.category === "electronics")
            .filter((p, i) => i < 4 )
            .map(
              (prod) => (
                <ProductItem product={prod}/>
              )
            )}
          </div>
        </div>
        <div className="h-[400px]">
          <div>
            <h2 className="text-3xl">Misc</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 ">
            {products
            .filter((p, i) => i < 4 )
            .map(
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
