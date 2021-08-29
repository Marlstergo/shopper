import React from 'react'
import { connect } from 'react-redux'
import Image from "next/image";
import Head from "next/head";
import { useRouter } from 'next/dist/client/router';
import { addItem } from '../../redux/cart/cart.action';


// import { createStructuredSelector } from 'reselect'
// import { selectProducts } from '../../redux/user/user.selector'

const ProductItem = ({product, additem}) => {
const route= useRouter()


  return (
    <>
    <Head>
      <title>{product.title}</title>
    </Head>
    <div className="h-full w-full overflow-hidden">
      <div className="flex flex-col items-center items-end justify-between">
        <Image src={product.image} width="160"  height="200" className="cursor-pointer" 
        onClick={() => {
          route.push(`/shop/${product.id}`)
        }}
        />
        <div className="flex flex-col justify-between">
          <div className="flex-1 flex justify-between cursor-pointer">
            <p className="text-xl h-16 truncate ">{product.title}</p>
          </div>
          <div className="flex justify-center">
            <button className=" h-12 text-white bg-gray-700 hover:bg-gray-900 px-3 py-1 rounded-md" 
              onClick={
                () => {
                  additem(product)
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
  additem: (prod) => dispatch(addItem(prod)),

  
})

// const mapStateToProps = createStructuredSelector({
//   products: selectProducts,
// });

export default connect(null, mapDispatchToProps)(ProductItem)
