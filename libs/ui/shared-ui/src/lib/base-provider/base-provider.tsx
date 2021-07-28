import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface BaseProviderProps {
  children: React.ReactNode
}

const StyledBaseProvider = styled.div`
  color: pink;
`;

export function BaseProvider(props: BaseProviderProps) {
  return (
    <StyledBaseProvider>
      <h1>Welcome to BaseProvider!</h1>
    </StyledBaseProvider>
  );
}

export default BaseProvider;
