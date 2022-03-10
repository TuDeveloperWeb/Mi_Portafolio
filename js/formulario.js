const formulario=document.querySelector('#form')

formulario.addEventListener('submit', handleSubmit)

   
    async function handleSubmit(event){

    
        event.preventDefault()
        const form = new FormData(this)
        const response = await fetch(this.action, {
            method: this.method,
            body: form,
            headers: {
                'Accept': 'application/json'
            }

        })

        if (response.ok) {
            this.reset()
            Swal.fire({
                position: 'center',
                icon: 'success',
                background: 'white',
                title: 'Mensaje enviado con exito',
                text:'Muchas Gracias por contactarme !',
                showConfirmButton: false,
                footer:'Pronto me contactaré contigo',
                timer: 5700

            
                
            })
        }
    }
    

