import { useRouter } from 'next/dist/client/router';
import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectProducts } from '../../redux/user/user.selector';

const Product = ({products}) => {
  const route = useRouter()
  const data = products.filter( p => p.id === route.pathname.split('/')[2])
  console.log(route.pathname.split('/'))
  return (
    <div>
      <div>
        <div className="flex flex-col md:flex-row h-[600px]">
          <div className="">
            {/* <Image src={}/> */}
            ds
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  // googleSignInStart: () => dispatch(googleSignInStart()),
});

const mapStateToProps = createStructuredSelector({
  products: selectProducts,
});

export default connect(mapStateToProps, mapDispatchToProps)(Product)
