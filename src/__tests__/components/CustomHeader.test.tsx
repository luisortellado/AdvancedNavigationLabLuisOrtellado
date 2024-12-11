import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CustomHeader from '../../components/CustomHeader';

describe('CustomHeader', () => {
  it('renders the title correctly', () => {
    const {getByText} = render(<CustomHeader title="Test Title" />);
    expect(getByText('Test Title')).toBeTruthy();
  });

  it('does not render the back button if showBackButton is false', () => {
    const {queryByLabelText} = render(<CustomHeader title="Test Title" />);
    expect(queryByLabelText('Go back')).toBeNull();
  });

  it('renders the back button if showBackButton is true', () => {
    const {getByLabelText} = render(
      <CustomHeader title="Test Title" showBackButton />,
    );
    expect(getByLabelText('Go back')).toBeTruthy();
  });

  it('calls onBackPress when the back button is pressed', () => {
    const onBackPressMock = jest.fn();
    const {getByLabelText} = render(
      <CustomHeader
        title="Test Title"
        showBackButton
        onBackPress={onBackPressMock}
      />,
    );
    fireEvent.press(getByLabelText('Go back'));
    expect(onBackPressMock).toHaveBeenCalledTimes(1);
  });

  it('does not render the settings button if onSettingsPress is not provided', () => {
    const {queryByLabelText} = render(<CustomHeader title="Test Title" />);
    expect(queryByLabelText('Settings')).toBeNull();
  });

  it('renders the settings button if onSettingsPress is provided', () => {
    const {getByLabelText} = render(
      <CustomHeader title="Test Title" onSettingsPress={() => {}} />,
    );
    expect(getByLabelText('Settings')).toBeTruthy();
  });

  it('calls onSettingsPress when the settings button is pressed', () => {
    const onSettingsPressMock = jest.fn();
    const {getByLabelText} = render(
      <CustomHeader title="Test Title" onSettingsPress={onSettingsPressMock} />,
    );
    fireEvent.press(getByLabelText('Settings'));
    expect(onSettingsPressMock).toHaveBeenCalledTimes(1);
  });

  it('renders correctly with both back and settings buttons', () => {
    const {getByLabelText, getByText} = render(
      <CustomHeader
        title="Test Title"
        showBackButton
        onBackPress={() => {}}
        onSettingsPress={() => {}}
      />,
    );
    expect(getByText('Test Title')).toBeTruthy();
    expect(getByLabelText('Go back')).toBeTruthy();
    expect(getByLabelText('Settings')).toBeTruthy();
  });
});
