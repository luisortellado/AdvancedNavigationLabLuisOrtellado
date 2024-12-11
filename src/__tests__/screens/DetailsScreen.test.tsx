import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import DetailsScreen from '../../screens/DetailsScreen';

describe('DetailsScreen', () => {
  const mockNavigation = {
    goBack: jest.fn(),
  };

  const mockRoute = {
    params: {
      id: '123',
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the screen title and item ID correctly', () => {
    const {getByText} = render(
      <DetailsScreen route={mockRoute} navigation={mockNavigation} />,
    );

    expect(getByText('Details')).toBeTruthy();
    expect(getByText('Item ID: 123')).toBeTruthy();
  });

  it('calls navigation.goBack when the "Go Back" button is pressed', () => {
    const {getByText} = render(
      <DetailsScreen route={mockRoute} navigation={mockNavigation} />,
    );

    const goBackButton = getByText('Go Back');
    fireEvent.press(goBackButton);

    expect(mockNavigation.goBack).toHaveBeenCalledTimes(1);
  });

  it('renders correctly when a different ID is passed', () => {
    const customRoute = {
      params: {
        id: '456',
      },
    };

    const {getByText} = render(
      <DetailsScreen route={customRoute} navigation={mockNavigation} />,
    );

    expect(getByText('Item ID: 456')).toBeTruthy();
  });
});
