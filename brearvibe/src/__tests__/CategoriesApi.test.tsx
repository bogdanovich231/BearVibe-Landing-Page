import { getAllCategories } from "../Helper/Api/ApiProducts";
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('getAllCategories', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    it('should fetch categories successfully', async () => {
        const mockData = {
            data: [
                { id: 1, name: 'Category 1' },
                { id: 2, name: 'Category 2' },
            ],
        };

        fetchMock.mockOnce(JSON.stringify(mockData));

        const result = await getAllCategories();

        expect(fetchMock).toHaveBeenCalledWith(
            'https://strapi-app-7663.onrender.com/api/categories',
            { method: 'GET' }
        );

        expect(result).toEqual(mockData.data);
    });
});

