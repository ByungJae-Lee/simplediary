import { useRef, useState } from "react";

const DiaryEditor = () => {
  const authorInput = useRef();
  const contentInput = useRef();

  // author, content 합치기
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });
  // onchange 통합본
  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  // 일기장 버튼
  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }
    alert("저장 성공!");
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <span>오늘의 감정점수 : </span>

        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;

// 오늘의 commit
// 입력이 되지 않았을 때 focus효과 나타내기
// 배열을 이용하여 React에서 List를 렌더링 해보고 개별적인 컴포넌트를 만들 것
