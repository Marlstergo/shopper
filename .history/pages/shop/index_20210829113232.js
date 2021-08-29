import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectProducts } from "../../redux/user/user.selector";

const Shop = ({ products }) => {
  return (
    <div>
      <div className="">
        <h2 className="">Welcome to SHopper Shop page</h2>
        <p>Browse through our collection of exotic products</p>
      </div>
      <div>
        <div>
          <h2>Shoes</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          {products}
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
