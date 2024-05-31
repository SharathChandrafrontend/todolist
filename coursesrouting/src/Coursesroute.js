import React from 'react'



export default function Coursesroute() {

  var [newcourses,setCourses] = React.useState(["Hello"])
   

  return (

    <div>
     <h1>Courses Details</h1>
     <ul>
      {
        newcourses.map( (c)=>{
          return <li>{c}</li>
        })
      }
     </ul>
    </div>
  )
}
