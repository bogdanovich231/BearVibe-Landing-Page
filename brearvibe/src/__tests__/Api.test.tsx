import { Provider } from "react-redux";
import { useGetAboutQuery, useGetCoworkingQuery } from "../Helper/Api/Api";
import { ReactNode } from "react";
import { store } from "../store/store";
import { renderHook } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();
function Wrapper(props: { children: ReactNode }) {
    return <Provider store={store}>{props.children}</Provider>;
}

it('renders hook about ', () => {
    renderHook(() => useGetAboutQuery('data'), { wrapper: Wrapper });
    renderHook(() => useGetCoworkingQuery('data'), { wrapper: Wrapper });
});
it('renders hook coworking', () => {
    renderHook(() => useGetCoworkingQuery('data'), { wrapper: Wrapper });
});


const data = {};

beforeAll(() => {
    fetchMock.mockOnceIf('https://strapi-app-7663.onrender.com/api/', () =>
        Promise.resolve({
            status: 200,
            body: JSON.stringify({ data }),
        })
    );
});

it('renders hook about ', () => {
    const { result } = renderHook(() => useGetAboutQuery('data'), {
        wrapper: Wrapper,
    });

    expect(result.current).toMatchObject({
        status: 'pending',
        endpointName: 'getAbout',
        isLoading: true,
        isSuccess: false,
        isError: false,
        isFetching: true,
    });
});

it('renders hook coworking ', () => {
    const { result } = renderHook(() => useGetCoworkingQuery('data'), {
        wrapper: Wrapper,
    });

    expect(result.current).toMatchObject({
        status: "fulfilled",
        endpointName: 'getCoworking',
        isLoading: false,
        isSuccess: true,
        isError: false,
        isFetching: false,
    });
});
