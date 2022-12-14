export function RepositoryItem(props) {
  {/* props é um objeto que contém todas as propriedades que eu passei para o componente */ }
  return (
    <li>
      <strong>{props.repository?.name ?? 'Default'}</strong>
      {/* Pegando o valor da propriedade repository e acessando o atributo name, o ? é para caso ele seja nulo e retorne o default*/}
      {/* <strong>{props.repository ?? 'Default'}</strong> ->  Quando quero usar javascript dentro do html, uso chaves {}  */}
      {/* Se a propriedade repository não existir, eu quero que o valor padrão seja 'Default' */}

      <p>{props.repository?.description}</p>

      <a href={props.repository?.link}>
        Acessar repositório
      </a>
    </li>
  );
}