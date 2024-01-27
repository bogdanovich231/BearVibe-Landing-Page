export interface IComponent {
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

export interface IContact {
  data: [
    {
      id: number;
      attributes: {
        email: string;
        phone: number;
        address: string;
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
  id: number;
  attributes: {
    name: string;
    description: string;
    price: number;
    categorie: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      }[];
    };
  };
}

export interface ICategories {
  id: number;
  attributes: {
    name: string;
  }
}

export interface IFormInput {
  name: string;
  email: string;
  topic: string;
  message: string;
}
