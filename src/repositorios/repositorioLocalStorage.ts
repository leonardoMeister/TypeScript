import { IRepositorio } from "../interfaces/IRepositorio";

export class RepositorioLocalStorage implements IRepositorio {

  private readonly localStorage: Storage;

  constructor() {
    this.localStorage = window.localStorage;
  }

  inserir(dados: any): void {
    const jsonDados = JSON.stringify(dados);
    this.localStorage.setItem("historico", jsonDados);
  }
  excluir(): void {
    this.localStorage.removeItem("historico");
  }

  selecionarTodos(): string[] {
    
    const jsonDados = this.localStorage.getItem("historico");

    if (jsonDados) {
      return JSON.parse(jsonDados)
    } else { return [] }

  }

}