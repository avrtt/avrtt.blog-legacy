import styled from 'styled-components';
   
export const Box = styled.div`
  padding-top: 100px;
  width: 100%; 
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
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
  grid-gap: 10px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
  font-weight: bold;
`;
   
export const FooterLink = styled.a`
  transition: 110ms ease-in;
  &:hover {
      filter: alpha(opacity=40);
      transition: 110ms ease-in;
      transform: scale(1.1);
  }
`;
