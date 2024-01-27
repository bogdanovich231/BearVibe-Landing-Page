export const getAllproducts = async (categories: string) => {
    try {
        const url = [`http://localhost:1337/api/products?populate=*`];

        if (categories) {
            url.push(`&filters[categorie][$eq]=${categories}`);
        }

        const response = await fetch(url.join(''), {
            method: 'GET',
        });

        const { data } = await response.json();
        return data;
    } catch (error) {
        console.error('Error in response products:', error);
        throw error;
    }
}


export const getAllCategories = async () => {
    try {
        const url = [`http://localhost:1337/api/categories`];
        const response = await fetch(url.join(''), {
            method: 'GET',
        });

        const { data } = await response.json();
        return data;
    } catch (error) {
        console.error('Error in response categories:', error);
        throw error;
    }
}