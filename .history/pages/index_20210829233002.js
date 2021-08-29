import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getProducts } from "../redux/user/user.action";
import { selectProducts } from "../redux/user/user.selector";

const Home = ({ loadProducts }) => {
  const route = useRouter();
  useEffect(() => {
    loadProducts();
    return () => {
      null;
    };
  }, []);
  return (
    <div className="flex flex-col h-[85vh] py-2 ">
      <Head>
        <title>Shopper</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div className="h-full mt-20">
        <div className="grid grid-cols-3 h-full gap-6">
          <div
            
            className="flex justify-center items-center h-full relative"
            onClick={() => {
              route.push("/shop/womens_clothing");
            }}
          >
            <Image className="hover:scale-110 transform overflow-hidden duration-500 cursor-pointer" src={`https://th.bing.com/th/id/OIP.NpEmOFPwFWn9h9VBHLu-OAHaEo?pid=ImgDet&w=2560&h=1600&rs=1`} layout="fill"/>
            <div className="bg-white bg-opacity-80 z-50 font-semibold cursor-pointer">
              <p className="">01:</p>
              <p className="capitalize">Women's Clothing</p>
              <p className="">Shop Now</p>
            </div>
          </div>
          <div
            className="flex justify-center items-center h-full relative"
            onClick={() => {
              route.push("/shop/electronics");
            }}
          >
            <Image className="hover:scale-110 transform overflow-hidden duration-500 cursor-pointer" src={`https://th.bing.com/th/id/OIP.rev9JIXOaHpLXkbpAQcJlQHaEo?pid=ImgDet&rs=1`} layout="fill" />
            <div className="bg-white bg-opacity-80 font-semibold cursor-pointer z-50">
              <p className="">02:</p>
              <p className="capitalize">electronics</p>
              <p className="">Shop Now</p>
            </div>
          </div>
          <div
            className="flex justify-center items-center relative"
            onClick={() => {
              route.push("/shop/jewelery");
            }}
          >
            <Image className="hover:scale-110 transform overflow-hidden duration-500 cursor-pointer"  src={`https://th.bing.com/th/id/R.1339a71e0ae39db7b3da56965ca0e34f?rik=fb3X%2b526ujgWsQ&riu=http%3a%2f%2fimages5.alphacoders.com%2f312%2f312828.jpg&ehk=ICC0XsnwGbG9tOw3UEm%2boV4VDDpqNyljbG6f5WAF4BI%3d&risl=&pid=ImgRaw&r=0`} layout="fill" />
            <div className="bg-white bg-opacity-80 z-50 font-semibold cursor-pointer">
              <p className="">03:</p>
              <p className="capitalize">jewelery</p>
              <p className="">Shop Now</p>
            </div>
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-2 gap-6 gap-x-16 h-72 h-full">
              <div
                className="flex justify-center items-center relative h-full px-10"
                onClick={() => {
                  route.push("/shop/misc");
                }}
              >
                <Image className="hover:scale-110 transform overflow-hidden duration-500 cursor-pointer" src={`https://www.inspiringwomen.co.za/wp-content/uploads/2014/10/shopping.jpg`} layout="fill" />
                <div className="bg-white bg-opacity-80 z-50  font-semibold cursor-pointer">
                  <p className="">04:</p>
                  <p className="capitalize">misc</p>
                  <p className="">Shop Now</p>
                </div>
              </div>
              <div
                className="flex justify-center items-center relative px-40"
                onClick={() => {
                  route.push("/shop/mens_clothing");
                }}
              >
                <Image className="hover:scale-110 transform overflow-hidden duration-500 cursor-pointer" src={`https://th.bing.com/th/id/OIP.i26SAgaRCjxKYvhGBgTxJwHaDt?pid=ImgDet&rs=1`} layout="fill" />
                <div className="bg-white bg-opacity-80 z-50  font-semibold cursor-pointer">
                  <p className="">05:</p>
                  <p className="capitalize">men's Clothing</p>
                  <p className="">Shop Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  // googleSignInStart: () => dispatch(googleSignInStart()),
  loadProducts: () => dispatch(getProducts()),
});

const mapStateToProps = createStructuredSelector({
  products: selectProducts,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
