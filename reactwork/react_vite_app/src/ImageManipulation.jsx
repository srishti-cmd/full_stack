import React, { useCallback, useState } from 'react'
import cat from './cat.jpg'
function ImageManipulation() {
    const[height,setheight]=useState(150);
    const[width,setwidth]=useState(100);
    const[red,setred]=useState();
    const[green,setgreen]=useState();
    const[blue,setblue]=useState();
    const[imgrotate,setimgrotate]=useState(0);

    function increaseheight(){
        setheight(height+30)
    }
    function increasewidth(){
        setwidth(width+30)
    }
    function changecolor()
    {
        setred(Math.random()*255)
        setgreen(Math.random()*255)
        setblue(Math.random()*255)
    }
    function rotate()
    {
        setimgrotate(imgrotate+30)
    }
  return (
    <div style={{height:'400px',width:'400px',border:'2px solid red',marginLeft:'200px'}}>
      <div style={{paddingLeft:'100px',width:'300px',backgroundColor:`RGB(${red},${green},${blue})`}}>
        <img src={cat} height={height} width={width}></img>
      </div>
      <div style={{marginTop:'100px'}}>
        <button onClick={increaseheight}>enhance_height</button>&nbsp;&nbsp;
        <button onClick={increasewidth}>enhance_width</button>&nbsp;&nbsp;
        <button onClick={rotate}>rotate</button>&nbsp;&nbsp;
        <button onClick={changecolor}>backgroundColor change</button>
      </div>
    </div>
  )
}

export default ImageManipulation
