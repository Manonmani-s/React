
const Display = ({number,nameOfClass}) => {

//const Display = (props) => {
// const {number,nameOfClass} = props;//Destructuring the properties to use the names of properties directly..we can use as props.propertyname and can be time consuming and teh variable names can be directls used if it is destructured
//Follwing is the advanced level of destructuring,that can be specified inside the argument of the function and can be used directly
//const Display = ( {number,nameOfClass}) => {
   
    return (
        <div className='container'>
        <h3>We have here <span>{number}</span> participants in Class <span>{nameOfClass}</span> </h3>
       
    </div>
    )
}

export default Display
