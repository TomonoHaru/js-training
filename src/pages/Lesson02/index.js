import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart02";
import instruction from "./instruction.md";

const convertData = (input) => {

  for (let i = 0; i < 20; i++) {
    return [];//input(([tag, count]) => ({ tag, count })); // ここを作りましょう！
  }
};

const Lesson = () => {
  return (
    <LessonPage
      dataUrl="data/qiita-tags.json"
      answerUrl="/answer02"
      convertData={convertData}
      instruction={instruction}
      title="Lesson 02"
      Chart={Chart}
    />
  );
};

export default Lesson;
