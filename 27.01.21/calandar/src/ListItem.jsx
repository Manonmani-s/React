
import React from 'react'

const days =['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'];
const dates = [];
for(let i=0;i<31;i++) dates[i] = i+1;

const dayslist=[{days:days},{dates:dates}];

const SimpleList = (list) => {
 return <ul>
   
    {list.list[0].days.map((item)=>(<li key={item}>{item}</li>))}
    {list.list[1].dates.map((item)=>(<li key={item}>{item}</li>))}

    {list.list[1].dates.map((item,idx,array)=>
    {
     
      for(let i = idx + 1, date = 1; i % 7 === 0; i++,date++)
        
      { 
        
         return(
          
        <li key={idx+8}>{date}</li>
        )
      } 
    }
    )}


  </ul>
};

const ListItem = () => (
  <SimpleList list={dayslist} />
);

export default ListItem









//(item,idx,array)
//index/7=0 insert a new table row and clsoe the prev one
//put 7 items
//insert a row
//when index=0 dont close the prev one
//check if arry.length -1 ==index(last item)--finish the array 
//for loop, for(let i = idx + 1, date = 1; i % 7 == 0; i++, date++)
//<td class="disabled">date</td>



 
