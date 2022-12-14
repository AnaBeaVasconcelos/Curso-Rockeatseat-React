import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

const repository = {
  name: "unform",
  description: "Forms in React",
  link: "https://github.com/unform/unform"
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem
          repository="unform2"
          description="Forms in React"
          link="https://github.com/unform/unform"
        /> {/* Passando propriedades para o componente */}
        <RepositoryItem repository={repository}/> {/* Passando propriedades para o componente de outra forma*/}
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  )
}
