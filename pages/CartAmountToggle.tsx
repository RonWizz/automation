import React from 'react'
import { FaMinus, FaPlus} from "react-icons/fa";
import '../pages/CartAmountToggle.module.css';

interface CartAmountToggleProps {
    // setDec: () => void;
    // setInc: () => void;
    amount: number;
    setDecrease: () => void;
    setIncrease: () => void;
    count: number;
  }
const CartAmountToggle: React.FC<CartAmountToggleProps> =  ({amount, setDecrease, setIncrease, count}) => {
  return (
    <div className='cart-button'>
        <div className='amount-toggle'>
          <div className='amount-style'>{amount}</div>
            <button onClick={() => setDecrease()}>
                <FaMinus/>
            </button>
            <div className='amount-style'>{count}</div>
            <button onClick={() => setIncrease()}>
                <FaPlus/>
            </button>
        </div>
    </div>
  )
}
export default CartAmountToggle;