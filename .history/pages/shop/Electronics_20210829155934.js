import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const Electronics = ({products}) => {
  return (
    <div>
      <div className="min-h-[80vh] flex flex-col space-y-5">
        <div>
          <div>
            <h2 className="text-3xl my-3 font-semibold">Mens's Clothing</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 ">
            {products
              .filter((item) => item.category === "electronics")
              // .filter((p, i) => i < 5)
              .map((prod) => (
                <ProductItem key={prod.title} product={prod} />
              ))}
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
export default connect(mapStateToProps, mapDispatchToProps)(Electronics);
