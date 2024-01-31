import fetchMock from 'jest-fetch-mock';
import { getAllproducts } from '../Helper/Api/ApiProducts';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import CatalogProducts from '../Components/CatalogProducts/CatalogProducts';
import { store } from '../store/store';
import '@testing-library/jest-dom';

fetchMock.enableMocks();
jest.mock('../Helper/Api/ApiProducts', () => ({
    getAllproducts: jest.fn(),
}));

describe('CatalogProducts component', () => {
    it('fetches and renders products for a selected category', async () => {
        const mockData = {
            data: [
                {
                    id: 1,
                    attributes: {
                        name: 'latte',
                        description: 'test description',
                        price: 20.20,
                        categorie: "coffee",
                        image: {
                            data: [
                                {
                                    attributes: {
                                        url: 'image-url',
                                    },
                                },
                            ],
                        },
                    },
                },
                {
                    id: 2,
                    attributes: {
                        name: 'latte2',
                        description: 'test description2',
                        price: 20.20,
                        categorie: "coffee",
                        image: {
                            data: [
                                {
                                    attributes: {
                                        url: 'image-url',
                                    },
                                },
                            ],
                        },
                    },
                },
            ],
        };

        (getAllproducts as jest.Mock).mockResolvedValue(mockData.data);

        render(
            <Provider store={store}>
                <CatalogProducts selectedCategory="coffee" />
            </Provider>
        );

        await waitFor(() => {
            expect(screen.getByText('latte')).toBeInTheDocument();
            expect(screen.getByText('latte2')).toBeInTheDocument();
        });
    });
});