<script>
import { updateTask } from "../services/TodoApi";
export default {
  name: "TaskItem",
  props: ["list", "handleDelete"],
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    async toggleComplete() {
      this.isLoading = true;

      let updatedList = { ...this.list, completed: !this.list.completed };

      try {
        const response = await updateTask(updatedList);
        if (response) {
          this.isLoading = false;
        }
      } catch (error) {
        console.log("Something went wrong [UPDATE_TASK]");
        this.isLoading = false;
      }
    },
  },
};
</script>

<template>
  <div class="task-item-check" :class="{ disabled: isLoading }">
    <input type="checkbox" v-model="list.completed" @click="toggleComplete" />
    <p :class="{ strikeOut: list.completed }">{{ list.task }}</p>
  </div>
  <button :disabled="isLoading" class="delete-btn" @click="handleDelete(list)">
    Delete
  </button>
</template>

<style scoped>
.task-item-check {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
}

.strikeOut {
  text-decoration: line-through;
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

.disabled {
  filter: blur(1px);
}

.delete-btn {
  background: #d62828;
}
</style>
