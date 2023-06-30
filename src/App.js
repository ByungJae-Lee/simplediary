import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

// const dummyList = [
//   {
//     id: 1,
//     author: "이병재",
//     content: "하이 1",
//     emotion: 5,
//     create_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "이정환",
//     content: "하이 2",
//     emotion: 1,
//     create_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "이병훈",
//     content: "하이 3",
//     emotion: 3,
//     create_date: new Date().getTime(),
//   },
// ];

const App = () => {
  // 일기 데이터
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  // 일기데이터 추가함수
  const onCreate = (author, content, emotion) => {
    const create_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      create_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };
  // 일기데이터 삭제함수
  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
};

export default App;

// 리스트데이터 수정
// 배열을 이용한 React List에 아이템을 동적으로 수정해보기
// With 조건부 렌더링
