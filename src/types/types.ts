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
  '22'?: number;
  '24'?: number;
  '25'?: number;
  '27'?: number;
  '28'?: number;
  '39'?: number;
}
