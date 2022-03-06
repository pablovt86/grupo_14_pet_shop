
window.onload = () =>{
    let formCelu = document.querySelector('#form-search')
    let form = document.querySelector('form')
    form.addEventListener('submit',(e)=>{
   if(e.target[0].value == ""){
    e.preventDefault()
   }
})
    formCelu.addEventListener('submit',(e)=>{
        if(e.target[0].value ==""){
         e.preventDefault()
        }

    })


}
