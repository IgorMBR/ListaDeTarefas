        const tarefas = []; 

        // alteradores de estado da aplicação
              function add() { 
              const input = document.querySelector("input");
              const tarefa = input.value;
              if (tarefa) { // Verifica se a tarefa não está vazia
              tarefas.push(tarefa);
              input.value = ""; // Limpa o campo de entrada
              render(); // Atualiza a lista
            } else {
                alert("Por favor, insira uma tarefa."); 
              }
            }
            // mostrar estado na tela
              function render(){
                const ul = document.querySelector("ul")
                ul.innerHTML = null

                  tarefas.forEach(function (tarefa){
                  const li = document.createElement("li")
                  li.innerText = tarefa
                  ul.appendChild(li)
              }) 
            }
          render()