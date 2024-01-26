import { useDispatch, useSelector } from "react-redux";
import { ICategories } from "../../Helper/Interface/Interface";
import './Categoies.scss';
import { selectAllCategories, setCategories } from "../../store/slices/Categories.slice";
import { getAllCategories } from "../../Helper/Api/ApiProducts";
import { useEffect } from "react";

interface CategoriesProps {
    categories: ICategories[];
    onCategoryClick: (category: string) => void;
}

function Categories({ onCategoryClick }: CategoriesProps) {
    const dispatch = useDispatch();
    const categories = useSelector(selectAllCategories);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoriesData = await getAllCategories();
                dispatch(setCategories(categoriesData));
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, [dispatch]);

    const handleCategoryClick = (category: string) => {
        onCategoryClick(category);
    };

    return (
        <div className="categories">
            {categories.map((data) => (
                <div className="categories_block" key={data.id} onClick={() => handleCategoryClick(data.attributes.name)}>
                    <p>{data.attributes.name}</p>
                </div>
            ))}
        </div>
    );
}

export default Categories