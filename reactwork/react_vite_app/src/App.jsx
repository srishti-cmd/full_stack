// import Student from './student';
// import StudentState from './StudentState';
// import './App.css'

// function App() {
  
//   // let s=12;
//   // const mystyle={
//   //   backgroundColor:'red',
//   //   color:'cyan'
//   // }
  

//   return (
//     // <div style={mystyle}> ABES Engineering colege
//     // <div style={mystyle}>{s}</div>
//     // <div style={{color:'blue',backgroundColor:'cyan'}}></div>
//     // <Student college="ABES Engineering College" roll="2022b0101201" name="srishti"/>
//     // </div>
//     <div>
//     <StudentState/>
//     </div>
//   )
// }

// export default App

import React from 'react'
import Student from './Student';
import StudentState from './StudentState';
import logo from './images.png'
import UseOfState from './UseOfState';
import ImageManipulation from './ImageManipulation';

const App = () => {
  let a = 12;
  const mystyle = {
    backgroundColor: 'red',
    color:"cyan"
  }

  // const studentData = [{
  //   college: "ABES Engineering College",
  //   pic: 'https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png',
  //   name: 'Stuti',
  //   roll: '154',
  //   branch: 'CSE',
  //   section:'A'
  // },
  // {
  //   college: "ABES Engineering College",
  //   pic: 'https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png',
  //   name: 'Tithaye',
  //   roll: '209',
  //   branch: 'CSE',
  //   section:'B'
  //   },
  //   {
  //     college: "ABES Engineering College",
  //     pic: 'https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png',
  //     name: 'Sakshi',
  //     roll: '111',
  //     branch: 'CSE',
  //     section:'C'
  //   }]

  return (
 
    <div>
      <ImageManipulation/>
    </div>
  )
}

export default App