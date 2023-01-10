import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Digital Clock', () => {
  render(<App />);
  const linkElement = screen.getByText(/Digital Clock/i);
  expect(linkElement).toBeInTheDocument();
});

/*
describe("Clock component", ()=>{
  beforeAll(()=>{
    jest.useFakeTimers()
    jest.setSystemTime(new Date ("20 Aug 2022 02:12:00 GMT").getTime())
  })
  afterAll(() => {
    jest.useRealTimers();
  });
  test('renders current time', () => {
    render(<App />);

    expect(screen.getByText(/2/i)).toBeInTheDocument();
    expect(screen.getByText(/12/i)).toBeInTheDocument();
})
})*/
