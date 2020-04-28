<template>
  <div id="todo-list-example">
    <form @submit.prevent="addNewTodo">
      <label for="new-todo">Add a todo</label>
      <input v-model="newTodoText" id="new-todo" placeholder="E.g. Feed the cat" />
      <button>Add</button>
    </form>
    <ul>
      <todoitem
        v-for="(todo, index) in todos"
        :key="todo.id"
        :title="todo.title"
        @remove="todos.splice(index, 1)"
      ></todoitem>
    </ul>
  </div>
</template>

<script>
import ToDoItem from "./ToDoItem";
export default {
  name: "todolist",
  components: { [ToDoItem.name]:ToDoItem },
  data() {
    return {
      newTodoText: "",
      todos: [
        {
          id: 1,
          title: "Do the dishes"
        },
        {
          id: 2,
          title: "Take out the trash"
        },
        {
          id: 3,
          title: "Mow the lawn"
        }
      ],
      nextTodoId: 4
    };
  },
  methods: {
    addNewTodo: function() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      });
      this.newTodoText = "";
    }
  }
};
</script>

<style>
</style>