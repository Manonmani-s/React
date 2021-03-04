

class APIservice{

    constructor(){
        this.apiURL = 'https://pixabay.com/api'
        this.apikey = '20214524-a2408f82b036126a3afa8df88'
    }

    onChange  = (e,setQuery,setAmount) => {
        switch (e.target.id) {
            case 'query':
                    setQuery(e.target.value)
                    break;
            case 'amount':
                    setAmount(e.target.value)
                    break;
            default:
                    alert('error saving the changes')
                    break;
        }
    }

    onSubmit = (query,amount,setImages) =>{

        if(query === ''){
            setImages([])
        }else{
            const url = `${this.apiURL}/?key=${this.apikey}&q=${query}&per_page=${amount}`
            fetch(url)
            .then(response =>{
                return response.json()
            })
            .then(data=>{
                setImages(data.hits)

            })
            .catch(err=>console.log(err))
        }
    }

    openModal = (img,setImgModal) => {
        SetImgModal(img)
    }

    closeModal = (SetImgModal) => {
        SetImgModal(null)
    }

}

const APIserviceInst = new APIservice();
export default APIserviceInst;