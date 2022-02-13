import React from "react";
import styled from "styled-components";

const List = styled.li`
  margin: 1rem 0;
  background: #8b005d;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  color: white;
  padding: 1rem 2rem;
  cursor: pointer;
`;

function CourseGoalItem(props) {
  // const [deleteText, setDeleteText] = useState('');

  function deleteHandler() {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  }

  return (
    <List className="goal-item" onClick={deleteHandler}>
      {props.children}
    </List>
  );
}

export default CourseGoalItem;
