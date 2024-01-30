import { useState } from 'react';
import CatalogProducts from '../../Components/CatalogProducts/CatalogProducts';
import Categories from '../../Components/Categories/Categories';

function Menu() {
  const [categories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryClick = async (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Categories categories={categories} onCategoryClick={handleCategoryClick} />
      <CatalogProducts selectedCategory={selectedCategory} />
    </div>
  );
}

export default Menu;
