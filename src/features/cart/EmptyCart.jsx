import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className='p-3'>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className='font-semibold mt-6'>Your cart is still empty. Start by adding some pizzas 🍕.</p>
    </div>
  );
}

export default EmptyCart;
