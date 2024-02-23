import './App.css';
import Card from './Card';
import Image1 from './scull.jpg'
import Image2 from './banners.jpg'
import Image3 from './Camera.png'
import Image4 from './Image.jpg'
import Image5 from './Pink.jpg'



function App() {

  return (
    <>
    <div className='flex gap-16'>
    <Card Heading='Hari' Comment='Rlno: 21' Image={Image1}/>
    <Card Heading='Niranjan' Comment='Rlno: 10' Image={Image5}/>
    <Card Heading='Pranav' Comment='Rolno: 30 ' Image={Image2}/>
    <Card Heading='Faheem' Comment='Rolno: 16' Image={Image4}/>
    </div>
    </>
  );
}

export default App;
