import React from "react";
import styled from "styled-components";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";

const UnorderedList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

function CourseGoalList(props) {
  return (
    <UnorderedList className="goal-list">
      {props.items.map((goal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </UnorderedList>
  );
}

export default CourseGoalList;
