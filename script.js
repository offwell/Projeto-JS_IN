window.addEventListener('load',()=>{
    
    let $btnAdd = document.querySelector("#btn-add")
    let $btnSalvar = document.querySelector("#btn-salvar")
    let $btnCancelar = document.querySelector("#btn-cancelar")

    $btnAdd.addEventListener('click',activeModal)
    $btnSalvar.addEventListener('click',salvarTarefa)
    $btnCancelar.addEventListener('click',cancelar)

})

function activeModal(){
    let $modal = document.querySelector("#modal")
    $modal.classList.toggle("modal-active")
    document.getElementById('btn-add');addEventListener('click', () => {
        document.getElementById('btn-add').classList.toggle('btn-giro')
    })
}

function salvarTarefa(event) {
    event.preventDefault();
    let $listaTarefa = document.querySelector("#listaTarefa");
    let $task = document.querySelector("#task");
    let tarefaAtual = $task.value.trim(); // Remove espaços em branco do início e fim

    if (tarefaAtual !== '') {
        let novoItemTarefa = document.createElement('div');
        novoItemTarefa.classList.add('itemTarefa');

        novoItemTarefa.innerHTML = `
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="checkbox${Date.now()}">
            </div>
            <h3>${tarefaAtual}</h3>
            <button type="button" class="btn btn-danger deletarBtn">Excluir</button>
            `;
            // 🗑️

        $listaTarefa.appendChild(novoItemTarefa);

        let $checkbox = novoItemTarefa.querySelector('.form-check-input');
        $checkbox.addEventListener('change', function() {
            if ($checkbox.checked) {
                novoItemTarefa.style.backgroundColor = 'lightgreen';
            } else {
                novoItemTarefa.style.backgroundColor = '';
            }
        });

        $task.value = '';

        let $deletarBtn = novoItemTarefa.querySelector('.deletarBtn');
        $deletarBtn.addEventListener('click', function() {
            novoItemTarefa.remove();
        });
    } else {
        alert('Por favor, insira uma tarefa antes de adicionar!');
    }
}



function cancelar(event){
    event.preventDefault()
    let $modal = document.querySelector("#modal")
    $modal.classList.remove("modal-active")
}
