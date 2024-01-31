import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

test('renders header', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
});

