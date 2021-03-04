
import Useritem from './Useritem'
import PropTypes from 'prop-types'

const User = ({users}) => {

    const userList = users.map(item=>{
        <div key={item.id} className='card text-center'>
        <img  
        src = {item.avatar_url}
        alt = {item.login}
        className = 'round_img'
        style = {{width:'60px'}}
      
        />
        <h3>{item.login}</h3>
        <a href={item.html_url} className='btn btn-dark btn-sm my-1'>More</a>
      </div>
    })

    return (
     <div style ={userStyle}>
         {userList}
     </div>
    )
}

//normal object below to define the style and used as an inline css
const userStyle = {
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap: '1rem'
};
User.propTypes={
    users:PropTypes.array.isRequired,
}
export default User
