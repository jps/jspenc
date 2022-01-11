import { render } from '@testing-library/react';
import { BaseProvider } from '../..';

export const renderWithTheme =
    (ui:React.ReactElement) => render(<BaseProvider>{ui}</BaseProvider>);