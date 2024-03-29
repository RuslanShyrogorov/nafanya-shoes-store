import { IShoe } from '../types/types';

export const shoes: IShoe[] = [
  {
    id: '1',
    name: 'Ортопедичні черевики "Dr.Mymi"',
    description: 'Демісезонні черевички для малюків',
    extraDescription:
      'Каблук Томаса,устілка-супінатор. Хороший, стійкий задник відмінно фіксує стопу дитини у правильному положенні',
    material: 'шкіра, усередині утеплювач',
    picture: ['https://i.postimg.cc/NGPkh161/940.jpg'],
    article: 1,
    price: 1840,
    oldPrice: 2000,
    sizes: {
      '22': 4,
    },
    quantity: 4,
    type: 'boots',
    gender: ['girl', 'boy'],
    season: 'демісезонні',
  },
  {
    id: '2',
    name: 'Ортопедичні туфлі "Dr.Mymi"',
    description: 'Туфлі для дівчаток',
    extraDescription: 'Каблук Томаса, супінатор.',
    material: 'шкіра',
    picture: ['https://i.postimg.cc/rmfCw4v2/307.jpg'],
    article: 2,
    price: 840,
    oldPrice: 970,
    sizes: {
      '24': 5,
      '25': 7,
    },
    quantity: 12,
    type: 'shoes',
    gender: ['girl'],
    season: 'демісезонні',
  },
  {
    id: '3',
    name: 'Весняні черевички "Absolute"',
    description: 'Черевички для дівчаток',
    extraDescription: 'Жорсткий задник, устілка-супінатор.',
    material: 'шкіра, замш',
    picture: ['https://i.postimg.cc/tTqNbkvz/1673.jpg'],
    article: 3,
    price: 1195,
    oldPrice: 0,
    sizes: {
      '24': 5,
      '25': 7,
      '26': 3,
      '27': 5,
      '28': 7,
      '29': 3,
      '30': 5,
      '31': 7,
      '32': 3,
    },
    quantity: 15,
    type: 'boots',
    gender: ['girl'],
    season: 'демісезонні',
  },
  {
    id: '4',
    name: 'Ортопедичні туфлі "Dr.Mymi"',
    description: 'Туфлі для дівчаток',
    extraDescription: 'Жорсткий задник, каблук Томаса, супінатор.',
    material: 'шкіра',
    picture: ['https://i.postimg.cc/Gt9P82C8/322.jpg'],
    article: 4,
    price: 840,
    oldPrice: 0,
    sizes: {
      '22': 5,
    },
    quantity: 5,
    type: 'shoes',
    gender: ['girl'],
    season: 'демісезонні',
  },
  {
    id: '5',
    name: 'Ортопедичні сандалі "Таші Орто"',
    description: 'Cандалі',
    extraDescription: 'Каблук Томаса, супінатор.',
    material: 'шкіра',
    picture: ['https://i.postimg.cc/rsb1SkVh/1.jpg'],
    article: 5,
    price: 950,
    oldPrice: 0,
    sizes: {
      '18': 7,
    },
    quantity: 11,
    type: 'slippers',
    gender: ['girl', 'boy'],
    season: 'літо',
  },
  {
    id: '6',
    name: 'Весняні черевички "Absolute"',
    description: 'Черевички для дівчаток',
    extraDescription: 'Жорсткий задник, устілка-супінатор.',
    material: 'шкіра, замш',
    picture: ['https://i.postimg.cc/tTqNbkvz/1673.jpg'],
    article: 6,
    price: 1195,
    oldPrice: 0,
    sizes: {
      '27': 5,
      '28': 7,
      '39': 3,
    },
    quantity: 15,
    type: 'boots',
    gender: ['girl'],
    season: 'демісезонні',
  },
  {
    id: '7',
    name: 'Ортопедичні туфлі "Dr.Mymi"',
    description: 'Туфлі для дівчаток',
    extraDescription: 'Жорсткий задник, каблук Томаса, супінатор.',
    material: 'шкіра',
    picture: ['https://i.postimg.cc/Gt9P82C8/322.jpg'],
    article: 7,
    price: 840,
    oldPrice: 0,
    sizes: {
      '22': 5,
    },
    quantity: 5,
    type: 'shoes',
    gender: ['girl'],
    season: 'демісезонні',
  },
  {
    id: '8',
    name: 'Ортопедичні сандалі "Таші Орто"',
    description: 'Cандалі',
    extraDescription: 'Каблук Томаса, супінатор.',
    material: 'шкіра',
    picture: ['https://i.postimg.cc/rsb1SkVh/1.jpg'],
    article: 8,
    price: 950,
    oldPrice: 0,
    sizes: {
      '18': 7,
    },
    quantity: 7,
    type: 'insoles',
    gender: ['boy'],
    season: 'літо',
  },
  {
    id: '9',
    name: 'Ортопедичні черевики "Dr.Mymi"',
    description: 'Демісезонні черевички для малюків',
    extraDescription:
      'Каблук Томаса,устілка-супінатор. Хороший, стійкий задник відмінно фіксує стопу дитини у правильному положенні',
    material: 'шкіра, усередині утеплювач',
    picture: ['https://i.postimg.cc/NGPkh161/940.jpg'],
    article: 9,
    price: 1840,
    oldPrice: 2000,
    sizes: {
      '22': 4,
    },
    quantity: 4,
    type: 'boots',
    gender: ['girl', 'boy'],
    season: 'демісезонні',
  },
  {
    id: '10',
    name: 'Ортопедичні туфлі "Dr.Mymi"',
    description: 'Туфлі для дівчаток',
    extraDescription: 'Каблук Томаса, супінатор.',
    material: 'шкіра',
    picture: ['https://i.postimg.cc/rmfCw4v2/307.jpg'],
    article: 10,
    price: 840,
    oldPrice: 970,
    sizes: {
      '24': 5,
      '25': 7,
    },
    quantity: 12,
    type: 'shoes',
    gender: ['girl'],
    season: 'демісезонні',
  },
  {
    id: '11',
    name: 'Весняні черевички "Absolute"',
    description: 'Черевички для дівчаток',
    extraDescription: 'Жорсткий задник, устілка-супінатор.',
    material: 'шкіра, замш',
    picture: ['https://i.postimg.cc/tTqNbkvz/1673.jpg'],
    article: 11,
    price: 1195,
    oldPrice: 0,
    sizes: {
      '24': 5,
      '25': 7,
      '26': 3,
      '27': 5,
      '28': 7,
      '29': 3,
      '30': 5,
      '31': 7,
      '32': 3,
    },
    quantity: 15,
    type: 'boots',
    gender: ['girl'],
    season: 'демісезонні',
  },
  {
    id: '12',
    name: 'Ортопедичні туфлі "Dr.Mymi"',
    description: 'Туфлі для дівчаток',
    extraDescription: 'Жорсткий задник, каблук Томаса, супінатор.',
    material: 'шкіра',
    picture: ['https://i.postimg.cc/Gt9P82C8/322.jpg'],
    article: 12,
    price: 840,
    oldPrice: 0,
    sizes: {
      '22': 5,
    },
    quantity: 5,
    type: 'shoes',
    gender: ['girl'],
    season: 'демісезонні',
  },
  {
    id: '13',
    name: 'Ортопедичні сандалі "Таші Орто"',
    description: 'Cандалі',
    extraDescription: 'Каблук Томаса, супінатор.',
    material: 'шкіра',
    picture: ['https://i.postimg.cc/rsb1SkVh/1.jpg'],
    article: 13,
    price: 950,
    oldPrice: 0,
    sizes: {
      '18': 7,
    },
    quantity: 11,
    type: 'slippers',
    gender: ['girl', 'boy'],
    season: 'літо',
  },
  {
    id: '14',
    name: 'Весняні черевички "Absolute"',
    description: 'Черевички для дівчаток',
    extraDescription: 'Жорсткий задник, устілка-супінатор.',
    material: 'шкіра, замш',
    picture: ['https://i.postimg.cc/tTqNbkvz/1673.jpg'],
    article: 14,
    price: 1195,
    oldPrice: 0,
    sizes: {
      '27': 5,
      '28': 7,
      '39': 3,
    },
    quantity: 15,
    type: 'boots',
    gender: ['girl'],
    season: 'демісезонні',
  },
  {
    id: '15',
    name: 'Ортопедичні туфлі "Dr.Mymi"',
    description: 'Туфлі для дівчаток',
    extraDescription: 'Жорсткий задник, каблук Томаса, супінатор.',
    material: 'шкіра',
    picture: ['https://i.postimg.cc/Gt9P82C8/322.jpg'],
    article: 15,
    price: 840,
    oldPrice: 0,
    sizes: {
      '22': 5,
    },
    quantity: 5,
    type: 'shoes',
    gender: ['girl'],
    season: 'демісезонні',
  },
  {
    id: '16',
    name: 'Ортопедичні сандалі "Таші Орто"',
    description: 'Cандалі',
    extraDescription: 'Каблук Томаса, супінатор.',
    material: 'шкіра',
    picture: ['https://i.postimg.cc/rsb1SkVh/1.jpg'],
    article: 16,
    price: 950,
    oldPrice: 0,
    sizes: {
      '18': 7,
    },
    quantity: 7,
    type: 'insoles',
    gender: ['boy'],
    season: 'літо',
  },
  {
    id: '17',
    name: 'Ортопедичні черевики "Dr.Mymi"',
    description: 'Демісезонні черевички для малюків',
    extraDescription:
      'Каблук Томаса,устілка-супінатор. Хороший, стійкий задник відмінно фіксує стопу дитини у правильному положенні',
    material: 'шкіра, усередині утеплювач',
    picture: ['https://i.postimg.cc/NGPkh161/940.jpg'],
    article: 17,
    price: 1840,
    oldPrice: 2000,
    sizes: {
      '22': 4,
    },
    quantity: 4,
    type: 'boots',
    gender: ['girl', 'boy'],
    season: 'демісезонні',
  },
  {
    id: '18',
    name: 'Ортопедичні туфлі "Dr.Mymi"',
    description: 'Туфлі для дівчаток',
    extraDescription: 'Каблук Томаса, супінатор.',
    material: 'шкіра',
    picture: ['https://i.postimg.cc/rmfCw4v2/307.jpg'],
    article: 18,
    price: 840,
    oldPrice: 970,
    sizes: {
      '24': 5,
      '25': 7,
    },
    quantity: 12,
    type: 'shoes',
    gender: ['girl'],
    season: 'демісезонні',
  },
  {
    id: '19',
    name: 'Весняні черевички "Absolute"',
    description: 'Черевички для дівчаток',
    extraDescription: 'Жорсткий задник, устілка-супінатор.',
    material: 'шкіра, замш',
    picture: ['https://i.postimg.cc/tTqNbkvz/1673.jpg'],
    article: 19,
    price: 1195,
    oldPrice: 0,
    sizes: {
      '24': 5,
      '25': 7,
      '26': 3,
      '27': 5,
      '28': 7,
      '29': 3,
      '30': 5,
      '31': 7,
      '32': 3,
    },
    quantity: 15,
    type: 'boots',
    gender: ['girl'],
    season: 'демісезонні',
  },
  {
    id: '20',
    name: 'Ортопедичні туфлі "Dr.Mymi"',
    description: 'Туфлі для дівчаток',
    extraDescription: 'Жорсткий задник, каблук Томаса, супінатор.',
    material: 'шкіра',
    picture: ['https://i.postimg.cc/Gt9P82C8/322.jpg'],
    article: 20,
    price: 840,
    oldPrice: 0,
    sizes: {
      '22': 5,
    },
    quantity: 5,
    type: 'shoes',
    gender: ['girl'],
    season: 'демісезонні',
  },
  {
    id: '21',
    name: 'Ортопедичні сандалі "Таші Орто"',
    description: 'Cандалі',
    extraDescription: 'Каблук Томаса, супінатор.',
    material: 'шкіра',
    picture: ['https://i.postimg.cc/rsb1SkVh/1.jpg'],
    article: 21,
    price: 950,
    oldPrice: 0,
    sizes: {
      '18': 7,
    },
    quantity: 11,
    type: 'slippers',
    gender: ['girl', 'boy'],
    season: 'літо',
  },
  {
    id: '22',
    name: 'Весняні черевички "Absolute"',
    description: 'Черевички для дівчаток',
    extraDescription: 'Жорсткий задник, устілка-супінатор.',
    material: 'шкіра, замш',
    picture: ['https://i.postimg.cc/tTqNbkvz/1673.jpg'],
    article: 22,
    price: 1195,
    oldPrice: 0,
    sizes: {
      '27': 5,
      '28': 7,
      '39': 3,
    },
    quantity: 15,
    type: 'boots',
    gender: ['girl'],
    season: 'демісезонні',
  },
  {
    id: '23',
    name: 'Ортопедичні туфлі "Dr.Mymi"',
    description: 'Туфлі для дівчаток',
    extraDescription: 'Жорсткий задник, каблук Томаса, супінатор.',
    material: 'шкіра',
    picture: ['https://i.postimg.cc/Gt9P82C8/322.jpg'],
    article: 23,
    price: 840,
    oldPrice: 0,
    sizes: {
      '22': 5,
    },
    quantity: 5,
    type: 'shoes',
    gender: ['girl'],
    season: 'демісезонні',
  },
  {
    id: '24',
    name: 'Ортопедичні сандалі "Таші Орто"',
    description: 'Cандалі',
    extraDescription: 'Каблук Томаса, супінатор.',
    material: 'шкіра',
    picture: ['https://i.postimg.cc/rsb1SkVh/1.jpg'],
    article: 24,
    price: 950,
    oldPrice: 0,
    sizes: {
      '18': 7,
    },
    quantity: 7,
    type: 'insoles',
    gender: ['boy'],
    season: 'літо',
  },
];
