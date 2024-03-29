import styled from "styled-components";

const GRIDCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: #fff;
  position: relative;
  box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
  height: 100%;
  width: 100%;
  cursor: pointer;
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 20.0px );
  -webkit-backdrop-filter: blur( 20.0px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  transition: all 500ms;
  overflow: hidden;
  background: ${(props) => props.background ? `url(${props.background})` : "#353535"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em,
      rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
    transform: translateY(-3px) scale(1.05);
  }
  @media screen and (min-width: 600px) {
    .card-tall {
      grid-row: span 2 / auto;
    }
    .card-wide {
      grid-column: span 2 / auto;
    }
  }
  @media screen and (min-width: 600px) {
    grid-row: ${(props) => (props.size == 2 ? "span 2 / auto" : "")};
    grid-column: ${(props) => (props.size == 2 ? "span 2 / auto" : "")};
  }
`;

export default GRIDCard;
