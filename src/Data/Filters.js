const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'black', label: 'Black', checked: false },
      { value: 'blue', label: 'Blue', checked: false },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'red', label: 'Red', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
      { value: 'rose', label: 'Rose', checked: false },
      { value: 'gray', label: 'Gray', checked: false },
    ],
  },
  {
    id: 'gender',
    name: 'Gender',
    options: [
      { value: 'men', label: 'Men', checked: false },
      { value: 'women', label: 'Women', checked: false },
      { value: 'unisexe', label: 'Unisexe', checked: false },
    ],
  },
];
export default filters;
