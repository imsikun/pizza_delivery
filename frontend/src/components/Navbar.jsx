import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/pizza/pizzaSlice';
function Navbar() {
  const { cartItem } = useSelector((state) => state.pizzas);

  return (
    <nav className='navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          PizzaMania
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#'>
                Login
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Cart {cartItem.length}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
