import Image from './Image';
import './App.css';
import img from './img.jpg'

function App() {
  return (
    <main>
        <Image source={ img } alternativeText="Cute cat staring" />
      </main>
  );
}

export default App;
