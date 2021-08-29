import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectProducts } from '../../redux/user/user.selector'

const Shop = ({products}) => {



  return (
    <div>
      
    </div>
  )
}

const mapDispatchToProps = dispatch =>({
  // googleSignInStart: () => dispatch(googleSignInStart()),
  
})

const mapStateToProps = createStructuredSelector({
  products: selectProducts,
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop)
