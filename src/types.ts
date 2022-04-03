export interface Product {
  id: number;
  name: string;
  price: number;
  priceTx: number;
  imageUrl: string;
  amount: number;
}

export interface Stock {
  id: number;
  amount: number;
}
