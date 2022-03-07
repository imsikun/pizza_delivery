import SinglePizza from '../components/SinglePizza';
import pizzas from '../pizzadata';
function Home() {
  return (
    <div>
      <div className='row'>
        {pizzas.map((pizza) => (
          <div className='col-md-4' key={pizza.id}>
            <div>
              <SinglePizza pizza={pizza} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
