import React from 'react'
import exdata from '../../exploredata'
import Nav from '../nav/nav'
import { Link } from 'react-router-dom'
import '../explore/explore.css'

export default function Explore() {
    return (
        <div>
            <Nav />
            <br/><br/><br/><br/>
            <h2>Explore Our Extensive <span>T-Shirt Collection!</span></h2>
            <div className='gridx'>
                {exdata.map((v, i) => (
                    <div className='grid'>
                        <img src={v.img} />
                        <div className='pflex'>
                            <span className='new'><strong>{v.newprice}</strong></span>
                            <span className='old'>{v.oldprice}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
