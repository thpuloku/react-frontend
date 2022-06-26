import {render,screen} from '@testing-library/react';
import App from './App';

describe('<App />', () => {
    it('renders without errors', () => {
        render(<App />)
    });

    it("load heading", () => {
        render(<App />);

        expect(screen.getByRole("heading")).toHaveTextContent(/Beers/);
        expect(screen.getByText("Beers")).toBeInTheDocument();
    });
});
