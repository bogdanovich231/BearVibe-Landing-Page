import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Header from "../Components/Header/Header";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import { store } from "../store/store";
import { BrowserRouter as Router } from "react-router-dom";

test('render header', async () => {
    render(
        <Provider store={store}>
            <Router>
                <Header />
            </Router>
        </Provider>
    );

    const buttonMenu = await screen.findByText('Menu');
    expect(buttonMenu).toBeInTheDocument();

    const buttonContact = await screen.findByText('Contact');
    expect(buttonContact).toBeInTheDocument();

    const buttonAbout = await screen.findByText('About');
    expect(buttonAbout).toBeInTheDocument();

    const buttonCatering = await screen.findByText('Catering');
    expect(buttonCatering).toBeInTheDocument();

    const buttonCoworking = await screen.findByText('Coworking');
    expect(buttonCoworking).toBeInTheDocument();

    const logoElement = screen.getByAltText('Logo');
    expect(logoElement).toBeInTheDocument();

    const burgerButton = screen.getByTestId('burger_btn');
    expect(burgerButton).toBeInTheDocument();
    expect(screen.getByTestId('menu')).not.toHaveClass('open');

    fireEvent.click(burgerButton);
    await waitFor(() => {
        expect(screen.getByTestId('menu')).toHaveClass('open');
    });

    fireEvent.click(burgerButton);
    await waitFor(() => {
        expect(screen.getByTestId('menu')).not.toHaveClass('open');
    });
});