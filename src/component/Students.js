import React from 'react'
import { Data } from '../Data'
import Student from './Student'
import styled from 'styled-components'

const Students = () => {
  return (
    <Container>
        {Data.map((e)=>
    <Student value={e} key={e.rollnumber}/>)}
    </Container>
  )
}

export default Students;

const Container = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;

`