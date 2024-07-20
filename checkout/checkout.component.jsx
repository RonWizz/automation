import { useSelector } from "react-redux";
import service from "../../pages/data/services.json";
// import {
//   selectCartItems,
//   selectCartTotal,
// } from "../../store/cart/cart.selector";

// import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      {/* <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader> */}
      {service.map((cartItem) => (
        <div key={cartItem.id} />
      ))}
      <Total>Total: ${amount}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;