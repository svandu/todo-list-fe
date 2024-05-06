<script>
import { editTaskListTitle } from "../services/TodoApi";
export default {
  props: ["list", "handleDeleteTodoList"],
  name: "TodoListItem",
  data() {
    return {
      isEditing: false,
    };
  },
  methods: {
    toggleIsEditing() {
      this.isEditing = !this.isEditing;
    },
    async saveChanges() {
      console.log(this.list);

      try {
        const response = await editTaskListTitle(this.list);

        if (response) {
          this.isEditing = !this.isEditing;
        }
      } catch (error) {
        console.log("Something went wrong [EDIT_TITLE]");
      }
    },
  },
};
</script>

<template>
  <div class="todo-list-card-heading">
    <input v-model="list.name" v-if="isEditing" />
    <h3 class="todo-list-title" v-else>{{ list.name }}</h3>

    <button class="view-btn" @click="saveChanges" v-if="isEditing">Save</button>
    <button class="view-btn" @click="toggleIsEditing" v-else>Edit</button>
  </div>
  <div class="todo-list-actions">
    <router-link :to="`/todo-list/${list.id}?title=${list.name}`">
      <button class="view-btn">View</button>
    </router-link>
    <button class="delete-btn" @click="handleDeleteTodoList(list.id)">
      Delete
    </button>
  </div>
</template>

<style scoped>
.todo-list-card-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.todo-list-title {
  margin: 0.2rem 0;
}

.todo-list-actions {
  display: flex;
  column-gap: 0.5rem;
}

input {
  appearance: none;
  background-color: #edf6f9;
  padding: 0.5rem;
  font-family: "Roboto", sans-serif;
  border: none;
  border-radius: 6px;
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
