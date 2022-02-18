import React from 'react'

const Card = ({name, owner, ratings, price}) => {
    return (
        <div class="card">
            <img src="./images/homepage/webdev.png" alt="product" />
            <div class="card-container">
                <h4 class="product-name">{name}</h4>
                <h3 class="product-owner">{owner}</h3>
                <div class="product-ratings">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-half-empty"></i>
                    <i class="fa fa-star-o"></i>
                    <span>({ratings})</span>
                </div>
                <div class="product-price">&#8377;<span>{price}</span></div>
                <button class="btn product-add-to-cart-btn">Go to cart</button>
                <button class="product-wish-btn">
                    <i class="fa fa-heart"></i>
                </button>
            </div>
        </div>
    )
}

export default Card