import React, { useEffect, useRef, useState } from 'react'
import { addPoints } from '../../helpers/addPoints'
import { getIconImages } from '../../helpers/getIconImages'
import { PointsButton } from '../buttons/PointsButton'

export const BalanceBox = ( { userData, setUserData, alerts, setAlerts, setActiveClass } ) => {

    const [ pointsSelected, setPointsSelected ] = useState( undefined )
    const [loading, setLoading] = useState( false )

    // Adds the selected points to the user
    const handleSubmit = event => {
        event.preventDefault()

        if( pointsSelected ){
            setLoading( true )

            addPoints( pointsSelected )
                .then( respData => {

                    setLoading( false )

                    if( respData ){
                        
                        setUserData( {
                            data: {
                                ...userData.data,
                                points: userData.data.points + pointsSelected
                            }
                        } )
                        setPointsSelected( undefined )
                        setAlerts( [ ...alerts, { message: `${ pointsSelected } points added successfully!`, type: "success" } ] )
                    }
                    else{
                        const errorMsg = `${ pointsSelected } is not a valid amount of points to add`
                        setAlerts( [ ...alerts, { message: errorMsg, type: "error" } ] )
                    }

                } )
        }
        else{
            const errorMsg = "No points selected"
            setAlerts( [ ...alerts, { message: errorMsg, type: "error" } ] )
        }
    }

    const handleBodyClick = e => {

        const checkClosest = e.target.closest( ".aeropay-container" );
        ( !checkClosest ) && setActiveClass( false );

    }

    document.body.addEventListener( "click", handleBodyClick )
    
    useEffect( () => {
        return () => {
            document.body.removeEventListener( "click", handleBodyClick )
        }
    }, [] )

  return (

    <div className='balance-box-container animate__animated animate__fadeInDown'>

        { // Loader icon
            loading &&
            <div className='loader-container'>
                <div className='loader'></div>
            </div> 
        }

        <div className='balance-box-title-container'>
            <h3 className='text-1-d balance-box-title'>Add Balance</h3>
        </div>


        <div className='balance-box-body'>

            {/* Card */}
            <div className='card-container animate__animated animate__fadeInUp'>

                <div className='card-logo'>
                    <h4 className='text-1-d'>AeroCard</h4>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M14.9506 5.4017C14.8652 5.25665 14.6761 5.20691 14.5283 5.2907L9.46809 8.15799C9.35293 8.2233 9.29313 8.35368 9.31984 8.4816L11.0228 16.6496C11.0311 16.6889 11.014 16.747 10.9883 16.7755L10.7814 17.0045C10.3512 17.4807 9.9868 17.7386 9.29416 17.7386C8.51751 17.7386 8.15287 17.3369 7.5755 16.6267C6.88593 15.7786 6.02792 14.7233 3.94176 14.7233H3.89018C3.60565 14.7233 3.375 14.9496 3.375 15.2289C3.375 15.5081 3.60565 15.7345 3.89018 15.7345H3.94176C5.5318 15.7345 6.13326 16.4742 6.77009 17.2574C7.33891 17.9571 7.98362 18.75 9.29416 18.75C10.4255 18.75 11.0481 18.2335 11.5523 17.6755L13.4121 15.6171C13.4121 15.617 17.8356 10.7211 17.8356 10.7211C17.9239 10.6234 17.9386 10.4812 17.8721 10.3681L14.9506 5.4017Z" fill="#252F3D"/></svg>
                </div>

                <div className='card-user-info'>
                    <p className='card-user-name text-2-d'>{ userData.data.name }</p>
                    <p className='card-user-date text-2-d'>07/23</p>
                </div>

            </div>

            {/* Points Form */}
            <form onSubmit={ handleSubmit } className="animate__animated animate__fadeIn">

                <div className='balance-buttons-container'>

                    <PointsButton pointsSelected={ pointsSelected } setPointsSelected={ setPointsSelected } btnPoints="1000" />
                    <PointsButton pointsSelected={ pointsSelected } setPointsSelected={ setPointsSelected } btnPoints="5000" />
                    <PointsButton pointsSelected={ pointsSelected } setPointsSelected={ setPointsSelected } btnPoints="7500" />

                </div>

                <button className='btn-cta btn-cta-default'>
                    <img src={ getIconImages( 'aeropay-3' ) }/>
                    <p className='text-1-d'>Add Points</p>
                </button>

            </form>

        </div>


    </div>
  )
}
