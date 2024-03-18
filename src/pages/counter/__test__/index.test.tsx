import React from 'react';
import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';
import Counter1 from '..'; // Assuming this is the correct import path

// Import your Redux store here
import { store } from '../../../store';
import { SetCounter } from '../actions';

describe('Counter', () => {

  beforeEach(() => {
    // Reset counter state to 0 before each test
    store.dispatch(SetCounter(0));
  });
  test('renders Counter component', () => {
    render(
      <Provider store={store}>
        <Counter1 />
      </Provider>
    );

    const headingElement = screen.getByText(/counter/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders Count component', () => {
    render(
      <Provider store={store}>
        <Counter1 />
      </Provider>
    );

    const headingElement = screen.getByText(/count:/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders Increment Button component', () => {
    render(
      <Provider store={store}>
        <Counter1 />
      </Provider>
    );

    const headingElement = screen.getByText(/Increment/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders Decrement Button component', () => {
    render(
      <Provider store={store}>
        <Counter1 />
      </Provider>
    );

    const headingElement = screen.getByText(/Decrement/i);
    expect(headingElement).toBeInTheDocument();
  });


  it("should render the correct increment count task", async () => {
    render(
      <Provider store={store}>
        <Counter1 />
      </Provider>
    );
    const incrementElement = screen.getByText(/Increment/i);
    const displayCountElement = screen.getByText(/Count:/i);
    expect(incrementElement).toBeInTheDocument();
    expect(displayCountElement).toBeInTheDocument();
    fireEvent.click(incrementElement);
    expect(displayCountElement).toHaveTextContent(/Count: 5/i);
  });

  it("should render the correct decrement count task", async () => {
    render(
      <Provider store={store}>
        <Counter1 />
      </Provider>
    );
    const decrementElement = screen.getByText(/Decrement/i);
    const displayCountElement = screen.getByText(/Count:/i);
    expect(decrementElement).toBeInTheDocument();
    expect(displayCountElement).toBeInTheDocument();
    fireEvent.click(decrementElement);
    expect(displayCountElement).toHaveTextContent(/Count: -5/i);
  });

});
