import styled from 'styled-components';
   
export const Box = styled.div`
  padding-top: 100px;
  width: 100%; 
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
`;
   
export const Row = styled.div`
  display: flex;
  justify-content: center;
  color: #777;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
  font-weight: bold;
`;
   
export const FooterLink = styled.a`
  transition: 170ms ease-in;
  &:hover {
      opacity: 0.7;
      filter: alpha(opacity=40);
      transition: 170ms ease-in;
  }
`;
