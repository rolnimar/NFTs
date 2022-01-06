import styled from "styled-components";

export const TeamContainer=styled.div`
  background: white;
  min-height: ${({height})=>(height)}px;
  display: flex;
  align-items: center;
`

export const TeamMembersWrapper=styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr 1fr; 
  }

  @media screen and (max-width: 468px){
    grid-template-columns: 1fr; 
  }
`

export const TeamWrapper=styled.div`
  
  margin: 2rem auto;
  text-align: center;
`


export const TeamMemberWrapper=styled.div`
padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const TeamMemberImage=styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid lightgra;
  -webkit-box-shadow: 0px 2px 11px 2px rgba(0,0,0,0.43); 
box-shadow: 0px 2px 11px 2px rgba(0,0,0,0.43);

`

export const TeamMemberName=styled.h1`
  font-size: 2rem;
  font-weight: 800;
  text-transform: uppercase;
`

export const TeamMemberInfo=styled.p`
  font-size: 1rem;
`

export const TeamHeading=styled.h1`
  padding: 1rem;
  text-transform: uppercase;
`

export const TeamMemberIcon=styled.p`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  font-size:2rem;
`