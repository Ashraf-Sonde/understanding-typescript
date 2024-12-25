import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const finished = todo.completed;

  logoTodo(id, title, finished);
});

const logoTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The todo ID is ${id}
    Has title ${title}
    Finised: ${completed}
  `);
};
