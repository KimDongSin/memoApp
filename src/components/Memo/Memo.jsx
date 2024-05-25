import styled from "styled-components";
import MemoList from "../MemoList/MemoList";
import MemoRecord from "../MemoRecord/MemoRecord";

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .memo__wrapper {
    width: 1024px;
    height: 500px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
    border: 1px solid #dddddd;
    display: flex;
  }
`;

function Memo() {
  return (
    <Wrap>
      <div className="memo__wrapper">
        <MemoList />

        <MemoRecord />
      </div>
    </Wrap>
  );
}

export default Memo;
