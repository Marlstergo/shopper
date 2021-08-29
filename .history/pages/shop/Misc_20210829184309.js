import Head from "next/head";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ProductItem from "../../components/ProductItem/ProductItem";
import { selectProducts } from "../../redux/user/user.selector";

const Misc = ({products}) => {
  return (

    <>
    <Head>
      <title>
        Misc
      </title>
    </Head>
    <div>
      <div className="min-h-[80vh] flex flex-col space-y-5">
        <div>
          <div>
            <h2 className="text-3xl my-3 mb-8 font-semibold">Misc</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 ">
            {products
              .filter((item) => item.category === "women's clothing")
              // .filter((p, i) => i < 5)
              .map((prod) => (
                <ProductItem key={prod.title} product={prod} />
              ))}
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
export default connect(mapStateToProps, mapDispatchToProps)(WomMiscen);
