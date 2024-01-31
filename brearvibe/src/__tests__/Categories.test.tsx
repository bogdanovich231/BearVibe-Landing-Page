import fetchMock from 'jest-fetch-mock';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import Categories from '../Components/Categories/Categories';
import { store } from '../store/store';
import '@testing-library/jest-dom';
import { getAllCategories } from '../Helper/Api/ApiProducts';

fetchMock.enableMocks();
jest.mock('../Helper/Api/ApiProducts', () => ({
    getAllCategories: jest.fn(),
}));

describe('Categories component', () => {
    it('fetches and renders categories', async () => {
        const mockCategories = [
            { id: 1, attributes: { name: 'Category 1' } },
            { id: 2, attributes: { name: 'Category 2' } },
        ];

        (getAllCategories as jest.Mock).mockResolvedValue(mockCategories);

        render(
            <Provider store={store}>
                <Categories categories={mockCategories} onCategoryClick={() => { }} />
            </Provider>
        );

        await waitFor(() => {
            mockCategories.forEach((category) => {
                expect(screen.getByText(category.attributes.name)).toBeInTheDocument();
            });
        });
    });
});
