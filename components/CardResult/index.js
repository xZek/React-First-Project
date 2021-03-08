import React from 'react'
import Card from '../Card';
import './style.css'
const cardData = [

    {id : 1, imgURl :'/assets/img/Card/pc1.jpg', title : 'Ofiste Leonard Cohen Modu ', text: 'Müzik tarihi içinde en güçlü ve etkileyici seslerden biri olan Leonard Cohen, 60 yılı bulan müzik yolculuğunda birbirinden güzel şarkılar seslendirdi, pek çok besteye imza attı.' },
    {id : 2, imgURl :'/assets/img/Card/pc1.jpg', title : 'Ofiste Leonard Cohen Modu ', text: 'Müzik tarihi içinde en güçlü ve etkileyici seslerden biri olan Leonard Cohen, 60 yılı bulan müzik yolculuğunda birbirinden güzel şarkılar seslendirdi, pek çok besteye imza attı.' },
    {id : 3, imgURl :'/assets/img/Card/pc1.jpg', title : 'Ofiste Leonard Cohen Modu ', text: 'Müzik tarihi içinde en güçlü ve etkileyici seslerden biri olan Leonard Cohen, 60 yılı bulan müzik yolculuğunda birbirinden güzel şarkılar seslendirdi, pek çok besteye imza attı.'},
    {id : 4, imgURl :'/assets/img/Card/pc1.jpg', title : 'Ofiste Leonard Cohen Modu ', text: 'Müzik tarihi içinde en güçlü ve etkileyici seslerden biri olan Leonard Cohen, 60 yılı bulan müzik yolculuğunda birbirinden güzel şarkılar seslendirdi, pek çok besteye imza attı.' },

  ];


function CardResult() {
    return (
    <div>
    
       <div style={{ overflow: 'auto',padding:'20px'}}  />
        <div className="blogTitle">
         
           <h1>Diğer Bloglar</h1>
           <hr className="hrClass"></hr>
         </div>
         <div className="container">
        {cardData.map(data =>(
        <Card key={data.toString()} imgURl={data.imgURl} title={data.title} text={data.text} />
         ))}  
     </div>
     <div style={{ overflow: 'auto',padding:'20px'}}  />
    </div>
    )
}

export default CardResult
