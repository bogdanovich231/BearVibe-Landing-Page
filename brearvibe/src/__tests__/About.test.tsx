import { Provider } from "react-redux";
import { store } from "../store/store";
import { render, renderHook, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import { ReactNode } from "react";
import { useGetAboutQuery } from "../Helper/Api/Api";
import About from "../Components/About/About";

fetchMock.enableMocks();
function Wrapper(props: { children: ReactNode }) {
    return <Provider store={store}>{props.children}</Provider>;
}

const data = {};
beforeAll(() => {
    fetchMock.mockOnceIf('https://strapi-app-7663.onrender.com/api/abouts?populate=*', () =>
        Promise.resolve({
            status: 200,
            body: JSON.stringify({ data }),
        })
    );
});
describe('render about component', () => {

    it('renders hook about ', () => {
        renderHook(() => useGetAboutQuery('data'), { wrapper: Wrapper });
        render(
            <Provider store={store}>
                <About />
            </Provider>
        );
        waitFor(() => {
            const title = screen.getByText('About Us');
            expect(title).toBeInTheDocument();
        });
    });
});