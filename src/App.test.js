import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

//TODO - add test properly
describe("<App />", () => {
  it("Renders <App /> component correctly", () => {
    const { getByText } = render(<App />);
    expect(getByText(/TourTrippyChange/i)).toBeInTheDocument();
  });
});
