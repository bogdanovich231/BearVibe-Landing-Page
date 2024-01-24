export interface IAbout {
  data: [
    {
      id: number;
      attributes: {
        title: string;
        description: string;
        image: {
          data: [
            {
              attributes: {
                url: string;
              };
            },
          ];
        };
      };
    },
  ];
}

export interface IProduct {
  data: {
    attributes: {
      product: {
        name: string;
        description: string;
        image: string;
        price: number;
        categorie: string;
      };
    };
  };
}
