import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Home from './components/Home';
import toggleImage from './functions'

test('renders Hello world!', () => {
  render(<Home />);
  const helloElem = screen.getByText(/Hello world!/i);
  expect(helloElem).toBeInTheDocument();
});
describe('Test for image', () => {
  test('image is in the document', () => {
    render(<Home/>);
    expect(screen.getByRole('img')).toBeInTheDocument()
    
  })
  test('image has appropriate attributes', () => {
    render(<Home/>);
    const image = screen.getByRole('img');
    expect(image).toHaveClass('center')
    expect(image).toHaveAttribute('src');
    expect(image).toHaveAttribute('alt');
  })
  test('nutton toggles image display', () => {
    render(<Home/>);
    const image = screen.getByRole('img');
    const myBtn = screen.getByTestId('button');
    userEvent.click(myBtn);
    let styles = window.getComputedStyle(image)
    expect(styles.display).toBe('none')
    userEvent.click(myBtn);
    styles = window.getComputedStyle(image)
    expect(styles.display).toBe('block')
  })
})