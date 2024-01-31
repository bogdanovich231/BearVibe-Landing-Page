import { Provider } from "react-redux";
import { store } from "../store/store";
import { render, renderHook, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import { ReactNode } from "react";
import { useGetContactQuery } from "../Helper/Api/Api";
import Contact from "../Components/Contact/Contact";

fetchMock.enableMocks();
function Wrapper(props: { children: ReactNode }) {
    return <Provider store={store}>{props.children}</Provider>;
}

const data = {};
beforeAll(() => {
    fetchMock.mockOnceIf('https://strapi-app-7663.onrender.com/api/contacts?populate=*', () =>
        Promise.resolve({
            status: 200,
            body: JSON.stringify({ data }),
        })
    );
});
describe('render contact component', () => {

    it('renders hook contact ', () => {
        renderHook(() => useGetContactQuery('data'), { wrapper: Wrapper });
        render(
            <Provider store={store}>
                <Contact />
            </Provider>
        );
        waitFor(() => {
            const title = screen.getByText('123 Bear Street, Poland');
            expect(title).toBeInTheDocument();
        });
    });
});