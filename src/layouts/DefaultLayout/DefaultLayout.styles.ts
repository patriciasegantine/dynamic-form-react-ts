import styled from 'styled-components';

export const LayoutContainer = styled.div`
  max-width: 1200px;
  width: calc(100vw - 10rem);
  //height: calc(46rem);
  //margin: 5rem auto;
  //padding: 2.5rem;
  position: relative;

  border-radius: 8px;
  display: flex;
  flex-direction: column;

  background: ${props => props.theme['gray-800']};
`
