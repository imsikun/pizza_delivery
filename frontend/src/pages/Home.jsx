import { useState, useEffect } from 'react';
import SinglePizza from '../components/SinglePizza';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPizza } from '../features/pizza/pizzaSlice';
function Home() {
  const { pizzas, isLoading, isError, message } = useSelector(
    (state) => state.pizzas
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPizza());
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Something went wrong.</h1>;
  }

  return (
    <div>
      <div className='row justify-content-center'>
        {isLoading ? (
          <h1>Loading....</h1>
        ) : isError ? (
          <h1>Something Went wrong</h1>
        ) : (
          pizzas.map((pizza) => (
            <div className='col-md-3 m-3' key={pizza._id}>
              <div>
                <SinglePizza pizza={pizza} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
