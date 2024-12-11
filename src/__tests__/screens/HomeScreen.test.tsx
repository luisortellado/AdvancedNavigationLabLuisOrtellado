import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import HomeScreen from '../../screens/HomeScreen';

describe('HomeScreen', () => {
  const mockNavigation = {
    navigate: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the screen title correctly', () => {
    const {getByText} = render(<HomeScreen navigation={mockNavigation} />);

    expect(getByText('Home')).toBeTruthy();
  });

  it('renders the "Go to Details" button', () => {
    const {getByText} = render(<HomeScreen navigation={mockNavigation} />);

    expect(getByText('Go to Details')).toBeTruthy();
  });

  it('calls navigation.navigate with correct parameters when the button is pressed', () => {
    const {getByText} = render(<HomeScreen navigation={mockNavigation} />);

    const button = getByText('Go to Details');
    fireEvent.press(button);

    expect(mockNavigation.navigate).toHaveBeenCalledTimes(1);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Details', {id: 1});
  });
});
