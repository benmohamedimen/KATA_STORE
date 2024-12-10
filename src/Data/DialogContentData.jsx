import MenuBar from '../shared/MenuBar';
import Cart from '../components/Cart/Cart';
import FilterForm from '../components/Products/FilterForm';
const data = [
  {
    index: 0,
    title: '',
    content: () => <></>,
    variant: 'vertical',
  },
  {
    index: 1,
    title: 'Cart',
    content: () => <Cart />,
    variant: 'vertical',
  },
  {
    index: 2,
    title: 'Filters',
    content: () => <FilterForm isDialog={true} />,
    variant: 'vertical',
  },
  {
    index: 3,
    title: 'Menu',
    content: () => <MenuBar />,
    variant: 'vertical',
  },
];
export default data;
