import React from 'react'
import './Student.css'

const Student = ({ data }) => {
  return (
    <div className='icard'>
      {/* {
        JSON.stringify(data)
      } */}
      {/* <p>{data.college}</p> */}
        <table>
            <tbody>
                  <tr style={{ backgroundColor: 'cyan', color:'brown'}}>
                      <td colspan={2}>{ data.college}</td>
                  </tr>
                  <tr>
                      <td colSpan={2}><img src={ data.pic} height='100px'/></td>
                 </tr>
                 <tr>
                    <td>Name</td>
                      <td>{ data.name}</td>
                  </tr>
                  <tr>
                    <td>Roll_Number</td>
                      <td>{ data.roll}</td>
                  </tr>
                  <tr>
                    <td>Branch</td>
                      <td>{data.branch }</td>
                  </tr>
                  <tr>
                    <td>Section</td>
                      <td>{ data.section}</td>
                  </tr>
            </tbody>
        </table>
    </div>
  )
}

Student.defaultdata = {
  college:'AKG Engineering College'
}

export default Student