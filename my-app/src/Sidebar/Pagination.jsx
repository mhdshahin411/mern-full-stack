import React from 'react'
import Button from 'react-bootstrap/Button';

function Pagination({setcurrentPage,postperpage,totaldata}) {
    let page=[]
for(let i=1;i<=Math.ceil(totaldata/postperpage);i++){
    page.push(i)
    
   
}


  return (
    <div style={{color:'red'}}>
        {
            page.map((val)=>{
                return(
                    <Button onClick={()=>setcurrentPage(val)} variant="outline-dark">{val}</Button>
                    // <button ></button>
                )
            })
        }
          
       
                
          
       

    </div>
  )
}

export default Pagination