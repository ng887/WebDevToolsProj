import React from 'react';
import './App.css';

const header = () => {

    return (
        <nav id="nav" className='j-card' >
            <div className='desktopLayout' style={{justifyContent: 'space-between'}}>
                <div><span className="text-xxxlarge j-button no-right-padding">J</span>            
                     <span className='top-margin-small'>OURNEY</span>
                </div>
                <div id='down'>
                    <div>
                        <a className='j-button top-margin' style={{marginTop:10}} >
                            <i className="fa fa-bars" ></i>
                        </a>
                    </div>            
                </div>
            </div>        
        </nav>
    )
}
export default header;