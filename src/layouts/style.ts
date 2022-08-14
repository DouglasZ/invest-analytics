import styled from 'styled-components';

export const Header = styled.header`
  background: var(--surface-b);
  border: 1px;
  border-style: solid;
  border-color: var(--surface-d);

  & .p-menubar {
    margin: 0 auto;
    max-width: 1170px;
    border: 0;
    border-radius: 0;
  }
`;

export const Wrapper = styled.main`
  margin: 0 auto;
  max-width: 1170px;
  height: calc(100vh - 60px);
  //overflow: auto;
  padding: 0.5rem 1rem;
`;

export const Content = styled.div``;
