import { useDispatch, useSelector } from 'react-redux';
import { ICategories } from '../../Helper/Interface/Interface';
import './Categoies.scss';
import { selectAllCategories, setCategories } from '../../store/slices/Categories.slice';
import { getAllCategories } from '../../Helper/Api/ApiProducts';
import { useEffect, useState } from 'react';

interface CategoriesProps {
  categories: ICategories[];
  onCategoryClick: (category: string) => void;
}

function Categories({ onCategoryClick }: CategoriesProps) {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategories);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategorieClick = () => {

  }
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getAllCategories();
        dispatch(setCategories(categoriesData));
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, [dispatch]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onCategoryClick(category);
  };

  return (
    <div className="categories">
      {categories.map((data) => (
        <div
          className={`categories_block ${activeCategory === data.attributes.name ? 'active' : ''}`}
          key={data.id}
          onClick={() => handleCategoryClick(data.attributes.name)}
        >
          <p>{data.attributes.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Categories;
