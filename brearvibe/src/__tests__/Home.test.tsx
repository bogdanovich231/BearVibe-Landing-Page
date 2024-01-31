// import { render, screen } from "@testing-library/react";
// import '@testing-library/jest-dom';
// import { Provider } from "react-redux";
// import { store } from "../store/store";
// import Home from "../Pages/Home/Home";
// import { BrowserRouter as Router } from "react-router-dom";

// test('render home', async () => {
//     render(
//         <Provider store={store}>
//             <Router>
//                 <Home />
//             </Router>
//         </Provider>
//     );

//     const welcomeComponent = screen.getByTestId('welcome-component');
//     const aboutComponent = screen.getByTestId('about-component');
//     const sliderComponent = screen.getByTestId('slider-component');
//     const contactComponent = screen.getByTestId('contact-component');

//     expect(welcomeComponent).toBeInTheDocument();
//     expect(aboutComponent).toBeInTheDocument();
//     expect(sliderComponent).toBeInTheDocument();
//     expect(contactComponent).toBeInTheDocument();
// });