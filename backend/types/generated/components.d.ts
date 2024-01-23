import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductProduct extends Schema.Component {
  collectionName: 'components_product_products';
  info: {
    displayName: 'Product';
    icon: 'cup';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.String;
    price: Attribute.Decimal;
    categorie: Attribute.Enumeration<
      ['All', 'Coffee', 'Pancakes', 'Sets', 'Bakery']
    >;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'product.product': ProductProduct;
    }
  }
}
