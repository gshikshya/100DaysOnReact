import React from 'react'
import Person from './Person'

function NameRendering() {
  const names = ["Shikshya","Sandhya","Sushma"]

  // const nameList =  names.map(name =>  <h2>{name}</h2>)
  // return (
  //   <div>
  //     {/* <h2>{names[0]}</h2>
  //     <h2>{names[1]}</h2>
  //     <h2>{names[2]}</h2> */}

  //     {nameList}
  //   </div>
  // )

  const persons = [
    {
      id:1,
      name: 'Shikshya',
      age : 23
    },
    {
      id:2,
      name: 'Sandhya',
      age : 19
    },
    {
      id:3,
      name: 'Sushma',
      age : 18
    },
    {
      id:4,
      name: 'Kanxi',
      age : 3
    }
  ]

  // const personList = persons.map (person => <Person key={person.id} person={person}></Person>)

  const nameList = names.map ((name,index)=> <h2> 
  key={index} {name}</h2>)

  return (
    <div>
    {nameList}
    </div>
  )

}

export default NameRendering
