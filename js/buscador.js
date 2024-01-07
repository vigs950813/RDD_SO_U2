document.addEventListener('keyup', e=>{

    if(e.target.matches('#buscador')){

        if(e.key==='Escape')e.target.value=''

        document.querySelectorAll('.concepto').forEach(palabra=>{

            palabra.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?palabra.classList.remove('filtro')
            :palabra.classList.add('filtro');

        })

    }

})