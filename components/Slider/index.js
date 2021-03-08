import React from 'react'
import './style.css'
import CoruselSlider from 'infinite-react-carousel';



const sliderData = [

    {id: 1, imgUrl : "./assets/img/slider/slide1.jpg", title : "Slider Başlık", text: "Slider Title" },
    {id: 2, imgUrl : "./assets/img/slider/slide1.jpg", title : "Slider Başlık", text: "Slider Title" },
    {id: 3, imgUrl : "./assets/img/slider/slide1.jpg", title : "Slider Başlık", text: "Slider Title" },
]

function Slider(props) {
    return (
       <div>
 <CoruselSlider>
 {sliderData.map(data =>(
                <div>  <img key={data.toString()} className="imgSlider" src={data.imgUrl} /></div>    
            ))}
  
  </CoruselSlider>
       </div>
    )
}

export default Slider
