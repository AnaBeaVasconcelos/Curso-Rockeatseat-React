// Aprendendo a usar o useState e suas propriedades no html

import { useState } from "react"; // Importando o useState

// Imusabilidade -> não podemos alterar o valor da variável diretamente, precisamos usar uma função para alterar o valor da variável

// usuarios = ['Nome1', 'Nome2', 'Nome3]
// usuarios.push('Nome4') -> Não podemos fazer isso, pois o push altera o valor da variável
// Nese caso estmamos mudando o valor do vertor direito na memória, o que não é permitido no React

// novoUsuarios = [...usuarios, 'Nome4'] -> Estamos criando um novo vetor, copiando o valor do vetor antigo e adicionando o novo valor

export function Counter() {

  const [counter, setCounter] = useState(0); // useState retorna um array com 2 posições por isso iremos desestruturar o array
  // Array destructuring -> Estou pegando o valor da variável counter e o valor da função setCounter
  // 1. Variável com o seu valor inicial
  // 2. Função para atualizarmos esse valor

  function increment() {
    setCounter(counter + 1) // setCounter é uma função que atualiza o valor da variável counter e aqui eu passo o novo valor somado com 1
  }

  return (
    <div>
      <h2>{counter}</h2> {/* Passando o valor da variável counter para o html */}
      <button type="button" onClick={increment}> {/* Passando a função increment para o html */}
        Increment
      </button>
    </div>
  );
}