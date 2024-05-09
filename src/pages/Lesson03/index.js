import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart03";
import instruction from "./instruction.md";

const convertData = (input) => {
  // 分割代入改変版
  // オブジェクトはプロパティの名前で指定できる
  // return input.filter(({gender}) => gender === "男性");

  //分割代入
  // return input.filter((name) => {
  //   const { gender } = name;
  //   return gender
  // });
  return input.filter((name) => name.gender == "男性"); // ここを作りましょう！
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer03"
      dataUrl="data/size-and-weight.json"
      convertData={(input) => {
        return [
          {
            id: "男性",
            data: convertData(input),
          },
        ];
      }}
      instruction={instruction}
      title="Lesson 03"
      Chart={Chart}
    />
  );
};

export default Lesson;
