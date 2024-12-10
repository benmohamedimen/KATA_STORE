const sortOptions = [
  {
    name: 'Best Seller',
    href: '#',
    current: true,
    criterion: 'soldCount',
    order: 'desc',
  },
  {
    name: 'Price: Low to High',
    href: '#',
    current: false,
    criterion: 'price',
    order: 'asc',
  },
  {
    name: 'Price: High to Low',
    href: '#',
    current: false,
    criterion: 'price',
    order: 'desc',
  },
];

export default sortOptions;
