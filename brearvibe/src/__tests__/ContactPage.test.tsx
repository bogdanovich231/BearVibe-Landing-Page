import { render, renderHook, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import ContactPage from "../Pages/Contact/ContactPage";
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { ReactNode } from "react";
import { useGetContactQuery } from "../Helper/Api/Api";
import fetchMock from 'jest-fetch-mock';
import { act } from "react-dom/test-utils";

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

test('renders ContactPage component with form and loader', async () => {
    renderHook(() => useGetContactQuery('data'), { wrapper: Wrapper });
    render(
        <Provider store={store}>
            <ContactPage />
        </Provider>
    );
    const inputName = screen.getByPlaceholderText('Name')
    userEvent.type(inputName, 'John Doe');
    expect(inputName).toBeInTheDocument();

    const inputEmail = screen.getByPlaceholderText('Email')
    userEvent.type(inputEmail, 'tanya@gmail.com');
    expect(inputEmail).toBeInTheDocument();

    const inputTopic = screen.getByPlaceholderText('Topic')
    userEvent.type(inputTopic, 'Topic test');
    expect(inputTopic).toBeInTheDocument();
    const submitButton = screen.getByText('Submit');
    act(() => {
        userEvent.click(submitButton);
    });

    
});
