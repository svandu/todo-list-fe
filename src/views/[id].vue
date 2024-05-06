<script>
import TaskList from "../components/task-list.vue";
import todoAction from "../components/todo-action.vue";
import { createTask, deleteTask, getTaskList } from "../services/TodoApi";

export default {
  components: { todoAction, TaskList },
  name: "TodoListById",
  data() {
    return {
      taskList: [],
      isFetching: false,
    };
  },
  async mounted() {
    this.isFetching = true;
    const response = await getTaskList({ id: +this.$route.params.id });
    this.taskList = response.data.data;

    this.isFetching = false;
  },
  methods: {
    async handleCreateTaskList(title) {
      try {
        const response = await createTask({
          todo_list: +this.$route.params.id,
          task: title,
          completed: false,
        });
        if (response) {
          const response = await getTaskList({ id: +this.$route.params.id });
          this.taskList = response.data.data;
        }
      } catch (err) {
        console.log("Something went wrong [CREATE_TASK]");
      }
    },

    async handleDeleteItem(item) {
      try {
        const response = await deleteTask(item);
        if (response) {
          const response = await getTaskList({ id: +this.$route.params.id });
          this.taskList = response.data.data;
        }
      } catch (error) {
        console.log("Something went wrong [DELETE_TASK]");
      }
    },
  },
};
</script>

<template>
  <div class="task-container">
    <todo-action
      :handleCreate="handleCreateTaskList"
      placeholder="Add new task"
      actionName="Add task"
    />
    <task-list :lists="taskList" :handleDeleteItem="handleDeleteItem" />
    <h3 v-if="isFetching" class="loading-text">Loading....</h3>
    <h3 v-if="taskList.length <= 0 && !isFetching">No task found</h3>
  </div>
</template>

<style scoped>
.task-container {
  margin-top: 1rem;
}

h3 {
  color: #fff;
  text-align: center;
}
</style>
