import React from "react";
import styled from "styled-components";

const Student = ({value}) => {
  return (
    <Container>
      <h1 className="header">Student Details</h1>
      <div className="detail">
        <h3>
          <span className="content">Name :</span>
          {value.name}
        </h3>
        <h3>
          <span className="content">Roll Number :</span>
          {value.rollnumber}
        </h3>
        <h3>
          <span className="content">College Name :</span>
          {value.collegename}
        </h3>
        <h3>
          <span className="content">Qualification :</span>
          {value.qualification}
        </h3>
      </div>
      </Container>
  );
};

export default Student;

const Container = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
padding: 2px 16px;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
width: 40%;

.header{

}
.detail{

}
.content{

}
`
