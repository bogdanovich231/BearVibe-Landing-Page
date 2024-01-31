import { Provider } from "react-redux";
import { store } from "../store/store";
import { render, renderHook, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import { ReactNode } from "react";
import { useGetCoworkingQuery } from "../Helper/Api/Api";
import CoworkingPage from "../Pages/Coworking/CoworkingPage";

fetchMock.enableMocks();
function Wrapper(props: { children: ReactNode }) {
    return <Provider store={store}>{props.children}</Provider>;
}

const data = {};
beforeAll(() => {
    fetchMock.mockOnceIf('https://strapi-app-7663.onrender.com/api/coworkings?populate=*', () =>
        Promise.resolve({
            status: 200,
            body: JSON.stringify({ data }),
        })
    );
});
describe('render coworking component', () => {

    it('renders hook contact ', () => {
        renderHook(() => useGetCoworkingQuery('data'), { wrapper: Wrapper });
        render(
            <Provider store={store}>
                <CoworkingPage />
            </Provider>
        );
        waitFor(() => {
            const title = screen.getByText('Coworking Space');
            expect(title).toBeInTheDocument();
        });
    });
});