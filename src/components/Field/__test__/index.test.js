import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Field from '..';

describe('Field', () => {

    it('should render correctly with not liked', () => {
        const { container } = render(<Field />);
        expect(container).toMatchSnapshot();
    }   
});
    