import React from 'react'

function Home(){
    return(
        <div>
            <div className="add-to-cart">
                <img src="https://i.imgur.com/eoQw0nP.png"/>
            </div>
            <h1>Home</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://i.imgur.com/2jou94m.png"/>
                </div>
                <div className="text-wrapper item">
                    <span>I-Phone</span>
                    <span>IPrice: $1000</span>

                </div>
                <div className="btn-wrapper">
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home