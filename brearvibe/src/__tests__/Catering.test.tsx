import { Provider } from "react-redux";
import { store } from "../store/store";
import { render, renderHook, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import { ReactNode } from "react";
import { useGetCateringQuery } from "../Helper/Api/Api";
import CateringPage from "../Pages/Catering/CateringPage";

fetchMock.enableMocks();
function Wrapper(props: { children: ReactNode }) {
    return <Provider store={store}>{props.children}</Provider>;
}

const data = {};
beforeAll(() => {
    fetchMock.mockOnceIf('https://strapi-app-7663.onrender.com/api/caterings?populate=*', () =>
        Promise.resolve({
            status: 200,
            body: JSON.stringify({ data }),
        })
    );
});
describe('render catering page', () => {

    it('renders hook catering ', () => {
        renderHook(() => useGetCateringQuery('data'), { wrapper: Wrapper });
        render(
            <Provider store={store}>
                <CateringPage />
            </Provider>
        );
        waitFor(() => {
            const title = screen.getByText('Catering');
            const btn = screen.queryByText('Contact Us');
            expect(btn).toBeInTheDocument();
            expect(title).toBeInTheDocument();
        });
    });
});