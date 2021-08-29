import React from 'react'
import { connect } from 'react-redux'
// import { createStructuredSelector } from 'reselect'
// import { selectProducts } from '../../redux/user/user.selector'

const ProductItem = ({products}) => {



  return (
    <>
    <Head>
      <title>{product.title}</title>
    </Head>
    <div>
      
    </div>
    </>
  )
}

const mapDispatchToProps = dispatch =>({
  // googleSignInStart: () => dispatch(googleSignInStart()),
  
})

// const mapStateToProps = createStructuredSelector({
//   products: selectProducts,
// });

export default connect(null, mapDispatchToProps)(ProductItem)
