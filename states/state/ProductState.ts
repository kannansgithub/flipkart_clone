import { CartItem } from '../../models/Cart';
import { Product } from '../../models/Product';

export interface ProductState {
  productList: Product[];
  selectedProduct?: Product;
  ItemInCart: CartItem[];
  orderId: string;
}
