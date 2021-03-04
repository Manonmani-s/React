
import React,{useState} from 'react'
import APIserviceInst from '../Service/APIService'
import Form from './Form/Form';
import Images from './Images/Images'
import Modal from './Modal/Modal'


export default function Main() {

    const [query,setQuery]      = useState("");
    const [amount,setAmount]    = useState(5);
    const [images,setImages]    = useState([]);
    const [imgModal,SetImgModal]=useState(null);

    const onChangeHandler = (e) =>{
        //save the quesry or amount in the state
        APIserviceInst.onChange(e,setQuery,setAmount)
    }

    const onSubmitHandler = () =>{
        //take query and amount and make API call
        APIserviceInst.onSubmit(query,amount,setImages)
    }

    const openModal = (img) => {
        //Take the img from the parematers and set into the imgmodal and open the model
        APIserviceInst.openModal(img,SetImgModal)
    }
    const closeModal =()=>{
        APIserviceInst.closeModal(SetImgModal)
    }

    return (
        <div className="container">
            <Form 
            query={query}
            onChangeHandler = {onChangeHandler}
            amount ={amount}
            onSubmitHandler ={onSubmitHandler}
            />

            { images.length > 0 ?  
            //images openModal
            <Images 
            images = {images}
            openModal = {openModal}
            /> 
            : null}


            {imgModal ? 
            //closeModal
                <Modal 
                closeModal = {closeModal}
                img = {imgModal}
                /> 
            :null}

        </div>
    )
}
