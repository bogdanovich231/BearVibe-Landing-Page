import { useEffect, useState } from "react";
import { getAllproducts } from "../../Helper/Api/ApiProducts";
import { IProduct } from "../../Helper/Interface/Interface";
import Product from "../Product/Product";
import './CatalogProducts.scss';
import { useDispatch, useSelector } from "react-redux";
import { selectAllProducts, setProducts } from "../../store/slices/Products.slice";

interface CatalogProductsProps {
    selectedCategory: string;
}

function CatalogProducts({ selectedCategory }: CatalogProductsProps) {
    const dispatch = useDispatch();
    const allProducts = useSelector(selectAllProducts);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let data;
                if (selectedCategory && selectedCategory !== "All") {
                    data = await getAllproducts(selectedCategory);
                } else {
                    data = await getAllproducts();
                }
                dispatch(setProducts(data));
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchData();
    }, [dispatch, selectedCategory]);

    return (
        <div className="catalog">
            {allProducts.map((data: IProduct) =>
                <Product key={data.id} product={data} />
            )}
        </div>
    );
}

export default CatalogProducts