import React from "react";
import Head from "next/head";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ProductItem from "../../components/ProductItem/ProductItem";
import { selectProducts } from "../../redux/user/user.selector";

const Shop = ({ products }) => {
  return (
    <>
    <Head>
      <title>Shop</title>
    </Head>
    <div className="text-gray-700">
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-bold text-4xl my-8">Welcome to SHopper Shop page</h2>
        <p className="mb-5">Browse through our collection of exotic products</p>
      </div>
      <div className="min-h-[80vh] flex flex-col space-y-5">
        <div>
          <div>
            <h2 className="text-3xl my-3 font-semibold">Mens's Clothing</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 ">
            {products.filter(item => item.category === "men's clothing")
            .filter((p, i) => i < 5 )
            .map(
              (prod) => (
                <ProductItem key={prod.title} product={prod}/>
              )
            )}
          </div>
        </div >
        <div className="">
          <div>
            <h2 className="text-3xl my-3 font-semibold">Jewelery</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 ">
            {products.filter(item => item.category === "jewelery")
            .filter((p, i) => i < 5 )
            .map(
              (prod) => (
                <ProductItem key={prod.title} product={prod}/>
              )
            )}
          </div>
        </div>
        <div className="">
          <div>
            <h2 className="text-3xl my-3 font-semibold">Women's Clothing</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 ">
            {products.filter(item => item.category === "women's clothing")
            .filter((p, i) => i < 4 )
            .map(
              (prod) => (
                <ProductItem key={prod.title} product={prod}/>
              )
            )}
          </div>
        </div>
        <div className="">
          <div>
            <h2 className="text-3xl my-3 font-semibold">Electronics</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 ">
            {products.filter(item => item.category === "electronics")
            .filter((p, i) => i < 4 )
            .map(
              (prod) => (
                <ProductItem key={prod.title} product={prod}/>
              )
            )}
          </div>
        </div>
        <div className="">
          <div>
            <h2 className="text-3xl my-3 font-semibold">Misc</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 ">
            {products
            .filter((p, i) => p.id === 5 || p.id === 8 || p.id ===13 || p.id ===17 )
            .map(
              (prod) => (
                <ProductItem key={prod.title} product={prod}/>
              )
            )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
