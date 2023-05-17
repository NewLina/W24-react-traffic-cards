import './App.css';
import data from './data.js';
import TariffCard from './TarriffCard/TariffCard';


function App() {
  return (
    <section className="section">
      {
        data.map ((item) => 
        <TariffCard key={item.id} headerColor={item.headerColor} price={item.price} tariffColor={item.tariffColor} speed={item.speed}></TariffCard>
        )
      }
    </section>
  );
}

export default App;
