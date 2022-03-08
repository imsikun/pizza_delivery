import { useState } from 'react';
import { Modal } from 'react-bootstrap';

function SinglePizza({ pizza }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState('small');
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
    console.log('closing');
  };
  const addToCart = () => {};
  return (
    <div className='shadow-lg p-3 mb-5 bg-body rounded'>
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img src={pizza.image} className='img-fluid pizza-img' alt='' />
      </div>
      <div className='flex-container'>
        <div className='w-100 m-1'>
          <p>Variants</p>
          <select
            className='form-control'
            value={varient}
            onChange={(e) => setVarient(e.target.value)}
          >
            {pizza.varients.map((varient, idx) => (
              <option value={varient} key={idx}>
                {varient}
              </option>
            ))}
          </select>
        </div>
        <div className='w-100 m-1'>
          <p>Quantity</p>
          <select
            className='form-control'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {/* creating an empty array with 1 to 10 */}
            {[...Array(10).keys()].map((x, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='flex-container'>
        <div className='m-1 w-100'>
          <h1 className='mt-2'>
            Price : {pizza.prices[0][varient] * quantity}Rs/-
          </h1>
        </div>
        <div className='m-1 w-100'>
          <button className='btn' onSubmit={addToCart}>
            ADD TO CART
          </button>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={pizza.image}
            className='img-fluid'
            alt='pizza_image'
            style={{ height: '400px ' }}
          />
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className='btn' onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SinglePizza;
