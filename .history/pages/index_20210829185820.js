import Head from "next/head";
import { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getProducts } from "../redux/user/user.action";
import { selectProducts } from "../redux/user/user.selector";

const Home = ({loadProducts}) => {

  useEffect(() => {
    loadProducts()
    return () => {
      null
    }
  }, [])
  return (
    <div className="flex flex-col h-[85vh] py-2">
      <Head>
        <title>Shopper</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div className="h-full">
        <div className="grid grid-cols-3 h-full">
          <div className="flex justify-center items-center h-full">
            <div className="bg-white bg-opacity-30">
              <p className="">01:</p>
              <p className="capitalize">Women's Clothing</p>
              <p className="">Shop Now</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
          <p className="">02:</p>
              <p className="capitalize">electronics</p>
              <p className="">Shop Now</p>
          </div>
          <div className="flex justify-center items-center">
          <p className="">03:</p>
              <p className="capitalize">jewelery</p>
              <p className="">Shop Now</p>
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-2">
              <div className="flex justify-center items-center">
              <p className="">04:</p>
              <p className="capitalize">misc</p>
              <p className="">Shop Now</p>
              </div>
              <div className="flex justify-center items-center">
              <p className="">05:</p>
              <p className="capitalize">men's Clothing</p>
              <p className="">Shop Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


const mapDispatchToProps = (dispatch) => ({
  // googleSignInStart: () => dispatch(googleSignInStart()),
  loadProducts: () => dispatch(getProducts())
});

const mapStateToProps = createStructuredSelector({
  products: selectProducts,
});

export default connect(mapStateToProps,mapDispatchToProps)(Home)
