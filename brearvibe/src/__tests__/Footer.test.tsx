import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import { store } from "../store/store";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

test('render header', async () => {
    render(
        <Provider store={store}>
            <Router>
                <Footer />
            </Router>
        </Provider>
    );

    const buttonMade = await screen.findByText('Tatsiana Kulinkovich');
    expect(buttonMade).toBeInTheDocument();

});