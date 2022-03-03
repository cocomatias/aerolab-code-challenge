import React, { useEffect, useState } from 'react'
import { getIconImages } from '../../helpers/getIconImages'
import { BalanceBox } from './BalanceBox'

export const AeroPay = ({ userData, setUserData, alerts, setAlerts }) => {
    const arrowIconClass = "aeropay-arrow";
    const arrowIconClassActive = "aeropay-arrow-active"

    const [activeClass, setActiveClass] = useState( false )

    const handleClick = event => {
        (activeClass) ? setActiveClass( false ) : setActiveClass( true )
    }

    useEffect(()=>{

    }, [ activeClass ])

  return (

    <div className='aeropay-container'>

        <button className='aeropay-button-container' onClick={ handleClick }>
            <img className='aeropay-aerolab-logo' src={ getIconImages( 'aeropay-1' ) }/>
            <span className={ userData.loading ? 'user-loading' : 'animate__animated animate__fadeIn' }>{ userData.data.points }</span>
            <img className={ activeClass ? `${ arrowIconClass } ${arrowIconClassActive}` : arrowIconClass  } src={ getIconImages( 'chevron-default' ) }/>
        </button>

        {
            activeClass && <BalanceBox userData={ userData }
                setUserData={ setUserData } setAlerts={ setAlerts }
                alerts = { alerts } setActiveClass={ setActiveClass } />
        }

    </div>    

  )
}