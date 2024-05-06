<script>
export default {
  props: ["handleCreate", "placeholder", "actionName"],
  data() {
    return {
      todoInput: "",
    };
  },
  methods: {
    handleAdd() {
      this.handleCreate(this.todoInput);
      this.todoInput = "";
    },
  },
};
</script>

<template>
  <div class="action-container">
    <input
      class="action-add-todolist"
      :placeholder="placeholder"
      type="text"
      v-model="todoInput"
      @keyup.enter="handleAdd"
    />
    <button :disabled="todoInput.length === 0" @click="handleAdd">
      {{ actionName }}
    </button>
  </div>
</template>

<style scoped>
.action-container {
  display: flex;
  align-items: center;
  padding: 0 10px;
  flex-wrap: wrap;
}

.action-add-todolist {
  appearance: none;
  background-color: #edf6f9;
  border: 1px solid #e7ebf0;
  padding: 0.7rem 1rem;
  font-size: 1rem;
  border-radius: 6px;
  flex: 1;
  font-family: "Roboto", sans-serif;
  margin: 0 1rem 0 0;
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
  background: #019e7c;
  color: #edf6f9;
  border-radius: 6px;
  font-family: "Roboto", sans-serif;
  margin: 1rem 0;
}

button:hover {
  background: #02c39a;
}
</style>
