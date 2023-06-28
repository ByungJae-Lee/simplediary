import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "이병재",
    content: "하이 1",
    emotion: 5,
    create_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "이정환",
    content: "하이 2",
    emotion: 1,
    create_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "이병훈",
    content: "하이 3",
    emotion: 3,
    create_date: new Date().getTime(),
  },
];

const App = () => {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
};

export default App;
