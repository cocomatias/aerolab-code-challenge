import React from 'react'
import { getIconImages } from '../../helpers/getIconImages'
import { ProductButton } from './ProductButton'

export const ProductCard = ({ category, cost, img, name, _id, userData, setUserData }) => {
    
    let url, hdUrl
    if( img ) {
        url = img.url
        hdUrl = img.hdUrl
    }
    const innerButtonHtml = ( userData.data.points < cost ) ?
        <p>You need 
            <img src={ getIconImages( "aeropay-2" ) }/>
            { cost }
        </p> :
        <p>
            Redeem for
            <img src={ getIconImages( "aeropay-3" ) }/>
            { cost }
        </p>
    

    return (
    
        <div className='product-container animate__animated animate__fadeIn'>
            
            <div className='product-card-container'>

                <div className='product-img-container'>
                    {
                        ( img ) ?
                            <img className='product-img' src={ hdUrl } alt={`Image for product ${ name }`} />
                            : <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M35.8682 6.40455C35.6406 6.01773 35.1363 5.8851 34.7422 6.10853L21.2482 13.7547C20.9412 13.9288 20.7817 14.2765 20.8529 14.6176L25.3943 36.3988C25.4161 36.5037 25.3708 36.6586 25.3021 36.7346L24.7503 37.3454C23.6032 38.6151 22.6315 39.303 20.7844 39.303C18.7134 39.303 17.741 38.2316 16.2013 36.3378C14.3625 34.0764 12.0744 31.262 6.51136 31.262H6.3738C5.61508 31.262 5 31.8657 5 32.6104C5 33.355 5.61508 33.9587 6.3738 33.9587H6.51136C10.7515 33.9587 12.3553 35.9313 14.0536 38.0198C15.5704 39.8855 17.2897 42 20.7844 42C23.8014 42 25.4616 40.6227 26.8061 39.1346L31.7657 33.6457C31.7657 33.6454 43.5617 20.5895 43.5617 20.5895C43.797 20.329 43.8362 19.95 43.6588 19.6483L35.8682 6.40455Z" fill="url(#paint0_linear_497_3827)"/><defs><linearGradient id="paint0_linear_497_3827" x1="24.3846" y1="6" x2="24.3846" y2="42" gradientUnits="userSpaceOnUse"><stop stopColor="#FF8800"/><stop offset="1" stopColor="#FF6600"/></linearGradient></defs></svg>
                    }
                    
                </div>

                <div className='product-info-container'>
                    <h3 className='text-1-d'>{ name }</h3>
                    <span className='text-2-ac'>{ category }</span>
                </div>

            </div>

            <ProductButton userData={ userData } setUserData={ setUserData } cost={ cost } prodId={ _id }/>

        </div>

  )
}
