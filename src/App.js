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
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} />
    </div>
  );
};

export default App;
