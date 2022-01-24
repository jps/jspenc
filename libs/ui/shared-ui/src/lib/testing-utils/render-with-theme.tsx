import { render } from '@testing-library/react';
import { mockMatchMedia } from './mock-window-matchMedia';
import { BaseProvider } from '../..';

export const renderWithTheme =
    (ui:React.ReactElement) => {
        mockMatchMedia();
        return render(<BaseProvider>{ui}</BaseProvider>)
    };