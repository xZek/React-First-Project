
import './App.css';
import Card from './components/Card';
import Headers from './components/Headers';





const cardData = [

  {id : 1, imgURl :'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%2842%29.jpg', title : 'Card Title', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
  {id : 2, imgURl :'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%2842%29.jpg', title : 'Card Title', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
  {id : 3, imgURl :'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%2842%29.jpg', title : 'Card Title', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
  {id : 4, imgURl :'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%2842%29.jpg', title : 'Card Title', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' }

];



function App() {
      return (
  <div className="App">
    <Headers />
    {cardData.map(data =>(
      <Card imgURl={data.imgURl} title={data.title} text={data.text} />
    ))}
    </div>
  );
}

export default App;
