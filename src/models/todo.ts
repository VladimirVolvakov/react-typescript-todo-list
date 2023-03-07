class Todo {
  id: string;
  text: string;

  // С помощью конструктора мы указываем, что ключи id text получат свои значения 
  // при создании сущности этого класса:
  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;