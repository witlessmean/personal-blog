import styled from "styled-components"
import { AdminButton } from '../../styles/styles';

const StyledNavBar = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 9vh;
background-color: #151515;
opacity: 0.85;
-webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 1);
-moz-box-shadow: 0 2px 10px rgba(0, 0, 0, 1);
box-shadow: 0 2px 10px rgba(0, 0, 0, 1);
position: sticky;
top: 0;
z-index: 1;
`;

const Navbar = () => {
    return (
      <StyledNavBar>
          <AdminButton>admin</AdminButton>
      </StyledNavBar>
    )
}

export default Navbar
