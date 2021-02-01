

const keyboard = ({inputHandler,courseNameHandler,participantsNumberHandler,number}) => {

   // const addNumber = (number) => ++number;

    return (

        <div className='group'>
        <input type="text" onChange={(e)=>inputHandler(e.target.value)}/>
        <button onClick = {()=>courseNameHandler()}> Add Class Name</button>
        <button className='btn' onClick={()=> {participantsNumberHandler(number+1)}}>Add Participant</button>
    </div> 

    )
}

export default keyboard
