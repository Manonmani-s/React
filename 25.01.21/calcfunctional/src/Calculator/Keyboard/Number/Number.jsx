import './Number.css'

const Number = ({inputHandler,seq}) => {
    return (
        <input type="text"
        className={seq}
        onChange={(e)=>{inputHandler(parseFloat(e.target.value))}} />
      
    )
}

export default Number
