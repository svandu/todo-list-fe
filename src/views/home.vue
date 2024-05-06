<script>
import TodoAction from "../components/todo-action.vue";
import TodoList from "../components/todo-list.vue";
import {
  createTodoList,
  deleteTodoList,
  getTodoList,
} from "../services/TodoApi";
import { mapGetters } from "vuex";

export default {
  components: { TodoAction, TodoList },
  name: "Home",

  data() {
    return {
      todoLists: [],
      isFetching: false,
    };
  },

  computed: {
    ...mapGetters("auth", {
      userId: "GET_USER_ID_GETTER",
    }),
  },

  async mounted() {
    this.isFetching = true;
    const response = await getTodoList({ id: this.userId });
    this.todoLists = response.data.data;

    this.isFetching = false;
  },

  methods: {
    async handleCreateTodoList(title) {
      try {
        const response = await createTodoList({
          name: title,
          user: this.userId,
        });
        if (response) {
          const response = await getTodoList({ id: this.userId });
          this.todoLists = response.data.data;
        }
      } catch (err) {
        console.log("Something went wrong [CREATE_TODO_LIST]");
      }
    },
    async handleDeleteTodoList(id) {
      try {
        const response = await deleteTodoList(id);
        if (response) {
          let filteredTodoList = this.todoLists.filter(
            (taskList) => taskList.id !== id
          );
          this.todoLists = filteredTodoList;
        }
      } catch (err) {
        console.log("Something went wrong [DELETE_TODO_LIST]");
      }
    },
  },
};
</script>

<template>
  <div class="todo-list-container">
    <todo-action
      :handleCreate="handleCreateTodoList"
      placeholder="Add new todo list"
      actionName="Add todo list"
    />
  </div>
  <todo-list :lists="todoLists" :handleDeleteTodoList="handleDeleteTodoList" />
  <h3 v-if="isFetching" class="loading-text">Loading....</h3>
  <h3 v-if="todoLists.length <= 0 && !isFetching">No task found</h3>
</template>

<style scoped>
.todo-list-container {
  margin-top: 2rem;
}

h3 {
  color: #fff;
  text-align: center;
}
</style>
