import { useNavigate, Outlet } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  const goToAuthPage = () => {
    navigate("/");
  };
  return (
    <>
      <StyledHeader>
        <h1>Add Your List Here ✌️</h1>
        <Button onClick={goToAuthPage}>Logout</Button>
      </StyledHeader>
      <Outlet />
    </>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  h1 {
    margin:0 auto;
  }
`;
const Button = styled.button`
  font-size: 1.25rem;
  background-color: white;
  padding: 0.5rem 1.5rem;
  margin-right: 20px;
  border-radius: 10px;
  
`;
