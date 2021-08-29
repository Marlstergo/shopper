import React from 'react'
import { connect } from 'react-redux'
import Image from "next/image";
import Head from "next/head";


// import { createStructuredSelector } from 'reselect'
// import { selectProducts } from '../../redux/user/user.selector'

const ProductItem = ({product}) => {



  return (
    <>
    <Head>
      <title>{product.title}</title>
    </Head>
    <div className="h-full w-full overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        <Image src={product.image} width="160"  height="200" className="" />
        <div className="flex flex-col justify-between">
          <div className="flex-1 flex">
            <p className="text-xl">{product.title}</p>
          </div>
          <div className="flex justify-center">
            <button className="" 
              onClick={
                () => {
                  console.log('add to cart clicked')
                }
              }
            >Add to Cart</button>
          </div>
        </div>
      </div>
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
