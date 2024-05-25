import styled from "styled-components";
import MemoListItem from "../MemoListItem/MemoListItem";
import { DefaultBtn } from "../UI/Button";

const Wrap = styled.div`
  width: 240px;
  height: 100%;
  border-right: 1px solid #dddddd;
  overflow: auto;

  > .memo__list__header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid #dddddd;
    position: sticky;
    top: 0;
    background: #ffffff;
    border-top-left-radius: 10px;
  }
`;

function MemoList() {
  return (
    <Wrap className="memo__list__wrapper">
      <div className="memo__list__header">
        <DefaultBtn>새 메모 작성하기</DefaultBtn>
        <DefaultBtn>삭제</DefaultBtn>
      </div>

      <MemoListItem />
    </Wrap>
  );
}

export default MemoList;
