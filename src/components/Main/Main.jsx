import styled from "styled-components";
import Memo from "../Memo";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
`;

function Main() {
  return (
    <Wrap>
      <Memo />
    </Wrap>
  );
}

export default Main;
