<script>
import taskItem from "./task-item.vue";
export default {
  components: { taskItem },
  props: ["lists", "handleDeleteItem"],
  name: "TaskList",
};
</script>

<template>
  <div class="task-list-wrapper">
    <h1 class="task-list-heading">{{ $route.query.title }}</h1>
    <div class="task-list-container">
      <div class="task-list" v-for="list in lists" :key="list">
        <task-item :list="list" :handleDelete="handleDeleteItem" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.task-list-wrapper {
  width: 100%;
  margin-top: 2rem;
  padding: 0 10px;
}

.task-list-heading {
  color: #06d6a0;
}

.task-list-container {
  margin: 2rem 0rem;
  color: #fff;
  gap: 2rem;
}

.task-list {
  padding: 1rem;
  background-color: #dee2e6;
  margin: 0.5rem 0;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.task-list-actions {
  display: flex;
  column-gap: 0.5rem;
}

.task-list-title {
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
</style>
