import { IShoe } from '../types/types';

const filterByCategory = (category: string, products: IShoe[]) => {
  if (category === 'all') {
    return products;
  } else if (category === 'дівчата') {
    return products.filter((item) => item.gender.includes('girl'));
  } else if (category === 'хлопчики') {
    return products.filter((item) => item.gender.includes('boy'));
  } else if (category === 'розпродаж') {
    return products.filter((item) => item.oldPrice > 0);
  } else if (category === 'устілки') {
    return products.filter((item) => item.type === 'insoles');
  } else if (category === 'капці') {
    return products.filter((item) => item.type === 'slippers');
  }
};

export default filterByCategory;
