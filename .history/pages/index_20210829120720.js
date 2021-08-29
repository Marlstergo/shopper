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
              <p className="">HATS</p>
              <p className="">Shop Now</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="">2</div>
          </div>
          <div className="flex justify-center items-center">
            <div className="">3</div>
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-2">
              <div className="flex justify-center items-center">
                <div className="">4</div>
              </div>
              <div className="flex justify-center items-center">
                <div className="">5</div>
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
