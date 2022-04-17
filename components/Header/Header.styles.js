import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 0;
  margin: 0 auto;
`;

export const LogoImg = styled.img`
  width: 40px;

`;
export const ItemZone = styled.div`
display: flex;
flex-direction: row;
transition: 300ms ease-in-out;

`;

export const HeaderItem = styled.div`
   align-items: auto;
    border-bottom: 1px solid transparent;
    align-items: center;
    color: var(--white);
    padding-left: 15px;
   
 
`