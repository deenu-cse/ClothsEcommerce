import React from 'react'
import Nav from '../component/nav/nav'
import logo from '../images3/logo.jpg'
import '../App.css'
import your from '../images3/your-design.jpeg'
import here from '../images3/your-image.png'
import u1 from '../images3/user-1.png'
import u2 from '../images3/user-2.png'
import u3 from '../images3/user-3.png'
import u4 from '../images3/user-4.jpg'
import u6 from '../images3/author-2.png'
import u7 from '../images3/author-3.png'
import u5 from '../images3/user-5.jpg'
import star from '../images3/icons8-star-24.png'
import tick from '../images3/icons8-tick-30.png'
import want from '../images3/11.jpg'
import plain from '../images3/position relative; (4).png'
import arr from '../images3/arrow.png'
import change from '../images3/icons8-arrow-30.png'
import want2 from '../images3/want.jpg'
import plain2 from '../images3/plain2.png'
import f1 from '../images3/file (23).png'
import f2 from '../images3/file (8).png'
import f3 from '../images3/file (9).png'
import f4 from '../images3/file (10).png'
import f5 from '../images3/file (11).png'
import f6 from '../images3/file (12).png'
import f7 from '../images3/file (13).png'
import f8 from '../images3/file (14).png'
import f9 from '../images3/file (15).png'
import f10 from '../images3/file (16).png'
import f11 from '../images3/file (17).png'
import f12 from '../images3/file (18).png'
import f13 from '../images3/file (19).png'
import f14 from '../images3/file (20).png'
import f15 from '../images3/file (21).png'
import f16 from '../images3/file (22).png'
import f17 from '../images3/file (23).png'
import Upload from '../component/upload/upload'
import { Link } from 'react-router-dom'



export default function Home() {
  return (
    <div>
      <Nav />
      <br /><br />
      <div className='main'>
        <div className='logo'>
          <img src={logo} />
        </div>
        <div className='flexlogo'>
          <div className='logoinfo'>
            <h1>Your image on {' '}<span>Custom </span>T-Shirt</h1>
            <p>Capture your favorite memories with your own,{' '}
              <span className="font-semibold">one-of-one</span> T-shirt.
              TeeFlick allows you to protect your memories, not just your T-shirt.</p>
          </div>
          <div className='yourd'>
            <img src={your}></img>
            <img className='here' src={here}></img>
          </div>
        </div>
        <br /><br />
        <div className='trust'>
          <div className='happy'>
            <div className='people'>
              <img src={u1} />
            </div>
            <div className='people'>
              <img src={u2} />
            </div>
            <div className='people'>
              <img src={u3} />
            </div>
            <div className='people'>
              <img src={u4} />
            </div>
            <div className='star'>
              <div className='starimg'>
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
              </div>
              <div className='starcon'>
                <span><strong>1,350 </strong>happy customers</span>
              </div>
            </div>
          </div>
        </div>
        <br /><br /><br />
        <div className='best'>
          <div className='tick'>
            <img src={tick} />
            <span>High-quality materials such as premium cotton, organic fabrics, or blends known for comfort, durability, and sustainability.</span>
          </div>
          <div className='tick'>
            <img src={tick} />
            <span>T-shirts are produced using state-of-the-art manufacturing processes that adhere to strict quality control measures.</span>
          </div>
          <div className='tick'>
            <img src={tick} />
            <span>T-shirts are designed for superior comfort and optimal fit, ensuring they feel great and look flattering on various body types.</span>
          </div>
          <div className='tick'>
            <img src={tick} />
            <span>Responsive support, easy communication channels, and personalized assistance to address any concerns.</span>
          </div>
        </div>
        <br /><br />
        <div className='buying'>
          <h1>What <span>people buying</span></h1>
          <br />
          <div className='want'>
            <img className='mygod' src={want} />
            <img className='yourgod' src={plain} />
          </div>
          <br />
          <div className='want'>
            <img className='mygod' src={want2} />
            <img className='yourgod' src={plain2} />
          </div>
        </div>
        <br /><br />

        <div className='reviewsec'>
          <h1>What <span>people say</span></h1>
          <div className='prev'>
            <div className='pimg'>
              <img src={u1} />
              <p>I ordered a couple of shirts from here and I'm so impressed with the quality! <span>They fit perfectly and the designs are even better in person.</span> Definitely my new go-to for unique tees!"</p>
            </div>
            <div className='pimg'>
              <img src={u2} />
              <p>These shirts are fire! <span>The fabric is super soft and comfy</span> , and the prints are top-notch. I get compliments every time I wear one. 5 stars!"</p>
            </div>
            <div className='pimg'>
              <img src={u3} />
              <p>Great customer service! I had a question about sizing and they <span>responded within minutes.</span> Ended up buying two shirts and they fit perfectly. Highly recommend!!"</p>
            </div>
          </div>
        </div>
        <br /><br />

        <div className='products'>
          <h1>Our <span>products</span></h1>
          <div className='center'>
            <div className='primg'>
              <img src={f1} />
              <img src={f2} />
              <img src={f3} />
              <img src={f4} />
              <img src={f5} />
              <img src={f6} />
              <img src={f7} />
              <img src={f8} />
              <img src={f9} />
              <img src={f10} />
              <img src={f11} />
              <img src={f12} />
              <img src={f13} />
              <img src={f14} />
              <img src={f15} />
              <img src={f16} />
            </div>
          </div>
          <br /><br /><br />
          <div className='nextbtn'>
            <Link to={'/explore'}>
              <button>Explore</button>
            </Link>
            <Link to={'/create'}>
              <button>Create T-Shirt</button>
            </Link>
          </div>
          <br /><br /><br />
        </div>
      </div>
    </div>
  )
}
