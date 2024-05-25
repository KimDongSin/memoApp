import { useState } from "react";
import styled from "styled-components";
import { v4 as uuid4 } from "uuid";

const Wrap = styled.ul`
  padding: 20px 12px;

  > li.active {
    background-color: orange;
  }

  > li:not(:last-child) {
    margin-bottom: 8px;
  }

  > li {
    padding: 12px 24px;
    cursor: pointer;
    border-radius: 5px;

    > p {
      font-size: 14px;
      margin-bottom: 4px;
      font-weight: bold;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    > span {
      font-size: 12px;
    }
  }
`;

function MemoListItem() {
  const [memoListIdx, setMemoListIdx] = useState(null);

  return (
    <Wrap>
      {/* 임시 */}
      {[1, 2, 3, 4, 5].map((listItem, idx) => (
        <li
          key={uuid4()}
          onClick={() => setMemoListIdx(idx)}
          className={memoListIdx === idx ? "active" : null}
        >
          <p>새로운 메모</p>
          <span>오전 1:37</span>
        </li>
      ))}
    </Wrap>
  );
}

export default MemoListItem;
