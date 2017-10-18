import React from 'react';
import Icon from './Icon';

const Superscript = props => (
  <Icon viewBox="0 0 512 512" {...props}>
    <path d="M500.065 270.691H383.611c3.092-18.342 24.015-34.022 47.984-50.038 34.415-22.995 76.138-50.642 76.138-103.222 0-50.301-38.48-85.431-93.577-85.431-37.629 0-72.116 19.458-90.794 50.314-3.321 5.486-1.706 12.623 3.631 16.18l24.42 16.276c5.32 3.546 12.556 2.364 16.309-2.812 10.243-14.13 24.825-24.68 42.168-24.68 26.189 0 37.912 17.288 37.912 34.421 0 21.219-22.471 36.854-48.49 54.956-35.769 24.886-80.283 55.857-80.283 114.931 0 5.562.558 11.025 1.433 17.915.762 5.997 5.861 10.499 11.906 10.499H500c6.627 0 12-5.373 12-12v-25.375c0-6.591-5.343-11.934-11.935-11.934zM245.92 432H276c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12h-59.675a12 12 0 0 1-10.19-5.662l-54.204-87.153c-3.262-4.892-6.132-10.128-7.99-13.714-1.773 3.559-4.575 8.823-8.129 14.317l-53.058 86.488A12.005 12.005 0 0 1 72.524 480H12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h31.728l65.48-100.449L48.755 240H12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h66.764a12 12 0 0 1 10.234 5.734l47.525 77.624c2.986 4.976 5.742 10.45 7.54 14.194 1.856-3.636 4.718-8.991 7.984-14.217l48.63-77.701A12 12 0 0 1 210.849 192H276c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12h-36.769l-60.974 90.984L245.92 432z" />
  </Icon>
);

Superscript.defaultProps = { name: 'Superscript' };

export default Superscript;
