import React from 'react'
import up from '../../images3/icons8-upload.gif'
import '../upload/upload.css'
import sample from '../../images3/x66.jpg'
import here from '../../images3/icons8-hand-right-24.png'


export default function Upload() {
    return (
        <div>
            <br/><br/><br/><br/>
            <div className='upload'>
                <div className='upimg'>
                    <img src={sample} />
                </div>
                <div className='upinfo'>
                    <h2>Unlock Your Creativity: Design Your <span>Own Custom T-Shirt!</span></h2>
                    <h3>Personalize Your Style:<span>Click, Upload,</span> Create Your Own T-Shirt Design!</h3>
                    <div className='upsection'>
                        <img src={up} />
                    </div>
                    <br /><br />
                    <div className='color'>
                        <h3>Change your <span>T-Shirt's </span> colour<img src={here} /></h3>
                        <input type='color' ></input>
                    </div>
                </div>
            </div>
        </div>
    )
}
