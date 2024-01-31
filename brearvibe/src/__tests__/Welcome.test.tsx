import { render, screen } from "@testing-library/react";
import Welcome from "../Components/Welcome/Welcome";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import { store } from "../store/store";
import { BrowserRouter as Router } from "react-router-dom";

test('render welcome', async () => {
    render(
        <Provider store={store}>
            <Router>
                <Welcome />
            </Router>
        </Provider>
    );

    const titleText = screen.getByText('BEARVIBE')
    const descriptionText = screen.getByText('Energy in a cup of aromatic coffee');
    expect(titleText).toBeInTheDocument();
    expect(descriptionText).toBeInTheDocument();
});