import styled from "styled-components";

const Wrap = styled.div`
  width: calc(100% - 240px);
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > p {
    text-align: center;
    font-size: 10px;
    color: gray;
  }

  > textarea {
    width: 100%;
    height: 90%;
    resize: none;
    border: none;
    font-size: 16px;

    &:focus {
      outline: none;
    }
  }
`;

function MemoRecord() {
  return (
    <Wrap>
      <p>2024년 5월 26일, 오전 2:21</p>

      <textarea></textarea>
    </Wrap>
  );
}

export default MemoRecord;
