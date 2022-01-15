import {connect}  from 'react-redux'
import { addToCart } from '../service/actions/actions'


import Home from '../component/Home'


const mapDispatchToProps = dispatch =>({
    addToCartHandler:data =>dispatch(addToCart(data)) 

})
const mapDispatchToState = state =>({

})

export default connect (mapDispatchToState,mapDispatchToProps)(Home)

// export default Home