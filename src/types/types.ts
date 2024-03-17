export interface IShoe {
  id: string;
  name: string;
  description: string;
  extraDescription?: string;
  material: string;
  picture: string[];
  article: number;
  price: number;
  oldPrice: number;
  sizes: ISizes;
  quantity?: number;
  type: string;
  gender: string[];
  season: string;
}

export interface ISizes {
  '18'?: number;
  '20'?: number;
  '21'?: number;
  '22'?: number;
  '23'?: number;
  '24'?: number;
  '25'?: number;
  '26'?: number;
  '27'?: number;
  '28'?: number;
  '29'?: number;
  '30'?: number;
  '31'?: number;
  '32'?: number;
  '33'?: number;
  '39'?: number;
}

export interface IShoesOfBasket {
  id: string;
  extraId: string;
  name: string;
  picture: string;
  article: number;
  price: number;
  selectedSize: string;
  selectedQuantity: number;
  orderPrice: number;
}
