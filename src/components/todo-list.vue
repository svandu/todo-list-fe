<script>
import todoListItem from "./todo-list-item.vue";
export default {
  components: { todoListItem },
  props: ["lists", "handleDeleteTodoList"],
  data() {
    return {
      isEditing: false,
    };
  },
};
</script>

<template>
  <div class="todo-list-wrapper">
    <h1 class="todo-list-heading">Todo Lists</h1>
    <div class="todo-list-container">
      <div class="todo-list" v-for="list in lists" :key="list">
        <todo-list-item
          :list="list"
          :handleDeleteTodoList="handleDeleteTodoList"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.todo-list-wrapper {
  width: 100%;
  margin-top: 2rem;
  padding: 0 10px;
}

.todo-list-heading {
  color: #06d6a0;
}

.todo-list-card-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.todo-list-container {
  margin: 2rem 0rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  color: #fff;
  gap: 2rem;
}

.todo-list {
  padding: 1rem;
  min-height: 200px;
  max-height: 100%;
  border: 1px solid #e5e5e563;
  border-radius: 7px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  background: #7c7c7c1c;
  max-width: 300px;
}

.todo-list-actions {
  display: flex;
  column-gap: 0.5rem;
}

.todo-list-title {
  margin: 0.2rem 0;
}

button {
  text-transform: capitalize;
  display: inline-block;
  padding: 0.5rem 0.7rem;
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: none;
  transition: 0.3s ease;
  color: #edf6f9;
  border-radius: 6px;
  font-family: "Roboto", sans-serif;
}

.view-btn {
  background: #019e7c;
}

.delete-btn {
  background: #d62828;
}
</style>
