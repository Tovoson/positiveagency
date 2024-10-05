import React from 'react'
import './footer.scss'

const Footer = () => {
    return (
        <div className="f-wrapper">
            <div className="f-container">
                <div className="contact">
                    <p className='primaryText'>Contactez nous:</p><br />
                    <div className='ads'>
                        <img src="./icons8-adresse-80.png" alt="" />
                        <p className='secondaryText'> lot 25 plle 85 morafeno</p>
                    </div >
                    <div className='ads'>
                        <img src="./icons8-e-mail-48.png" alt="" />
                        <p className='secondaryText'>Liebeaupair@gmail.com</p>
                    </div>
                    <div className='ads'>
                        <img src="./icons8-téléphone-48.png" alt="" />
                        <p className='secondaryText'>+491728134483</p>
                    </div>
                     
                </div>
                <div className="img-lien">
                    <span className='primaryText'>Suivez-nous :</span>
                    <a href="https://www.facebook.com/dinasolorachelle.lovamamy" target="_blank" rel="noopener noreferrer">
                        <img src="./fb.png" alt="Facebook" />
                    </a>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer