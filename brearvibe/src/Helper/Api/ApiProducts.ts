export const getAllproducts = async () => {
    try {
        const url = [`http://localhost:1337/api/products?populate=*`];
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