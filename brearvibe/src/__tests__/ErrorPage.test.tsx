import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import { store } from "../store/store";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorPage from "../Components/404/ErrorPage";

test('render error page', async () => {
    render(
        <Provider store={store}>
            <Router>
                <ErrorPage />
            </Router>
        </Provider>
    );

    const title = screen.getByText('Oops!');
    expect(title).toBeInTheDocument();
});