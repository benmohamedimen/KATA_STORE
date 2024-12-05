const sortOptions = [
    { name: 'Most Popular', href: '#', current: true, criterion: 'soldCount', order: 'desc' },
    { name: 'Best Rating', href: '#', current: false, criterion: 'rating', order: 'desc' },
    { name: 'Newest', href: '#', current: false, criterion: 'createdAt', order: 'desc' },
    { name: 'Price: Low to High', href: '#', current: false, criterion: 'price', order: 'asc' },
    { name: 'Price: High to Low', href: '#', current: false, criterion: 'price', order: 'desc' },
  ];
  
  export default sortOptions;
  