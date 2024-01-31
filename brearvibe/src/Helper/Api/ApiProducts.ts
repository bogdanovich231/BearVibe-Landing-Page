// @ts-ignore

export const getAllproducts = async (categories: string) => {
  try {
    const url = [`https://strapi-app-7663.onrender.com/api/products?populate=*`];

    if (categories) {
      url.push(`&filters[categorie][$eq]=${categories}`);
    }

    const response = await fetch(url.join(''), {
      method: 'GET',
    });

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log('Error in response products:', error);
    throw error;
  }
};

export const getAllCategories = async () => {
  try {
    const url = [`https://strapi-app-7663.onrender.com/api/categories`];
    const response = await fetch(url.join(''), {
      method: 'GET',
    });

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log('Error in response categories:', error);
    throw error;
  }
};
