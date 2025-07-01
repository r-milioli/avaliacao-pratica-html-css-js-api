document.getElementById('buscar').addEventListener('click', () => {
            const cep = document.getElementById('cep').value.trim();
            if(!cep.match(/^[0-9]{8}$/)){
                alert(`CEP inválido. Use apenas números com 8 dígitos!`)
                return;
            }
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => { 
                if(data.erro){
                    alert('CEP não encontrado, digite um CEP válido!')
                }
                else{
                    document.getElementById('rua').value = data.logradouro
                    document.getElementById('bairro').value = data.bairro
                    document.getElementById('cidade').value = data.localidade
                    document.getElementById('estado').value = data.estado

                }
             })
             .catch(erro => {
                alert('Erro ao buscar o CEP')
             })

        })