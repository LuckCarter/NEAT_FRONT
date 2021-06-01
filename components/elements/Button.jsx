import styled from "styled-components";

const Button = styled.button`
letter-spacing:5px;
padding: 10px 30px 10px 30px;
cursor: pointer;
margin: 5px;
text-transform:capitalize;
background: ${(props) => props.red ? props.theme.colors.error : props.theme.colors.secondary};
color: ${(props) => props.theme.colors.primary};
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 20.0px );
-webkit-backdrop-filter: blur( 20.0px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
&:not(:last-child) {
  margin-bottom: 12px;
}
&:disabled{
  background:red!important;
}
&:hover {
}
&:focus {

  border-color: ${(props) => props.theme.colors.primary};
  box-shadow: 0 0 0 4px rgb(108 41 245 / 0.05);
}
&::placeholder {
  color: ${(props) => props.theme.colors.primary};
  opacity: 0.8;
}
@media (max-width: 768px) {
  padding: 10px 20px 10px 20px;
}
`;
export default Button;