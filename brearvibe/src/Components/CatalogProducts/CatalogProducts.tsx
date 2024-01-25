import { useEffect, useState } from "react";
import { getAllproducts } from "../../Helper/Api/ApiProducts";
import { IProduct } from "../../Helper/Interface/Interface";
import Product from "../Product/Product";

function CatalogProducts() {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllproducts();
                setAllProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchData();
    }, []);

    console.log("all products", allProducts)

    return (
        <div>
            {allProducts.map((data: IProduct) =>
                <Product key={data.id} product={data} />
            )}
        </div>
    )
}

export default CatalogProducts