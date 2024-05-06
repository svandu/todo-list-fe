import API from "./API";

export function getTodoList(data) {
  return API().get(`todolist/${data.id}/`);
}

export function createTodoList(data) {
  return API().post("todolist/", data);
}

export function deleteTodoList(id) {
  return API().delete(`todolist/${id}/`);
}

export function getTaskList(data) {
  return API().get(`task/${data.id}/`);
}

export function createTask(data) {
  return API().post("task/", data);
}

export function updateTask(data) {
  return API().put(`task/${data.id}/`, data);
}

export function deleteTask(data) {
  return API().delete(`task/${data.id}/`);
}

export function userSignup(data) {
  return API().post("register/", data);
}

export function userLogin(data) {
  return API().post("login/", data);
}

export function editTaskListTitle(data) {
  return API().put(`todolist/${data.id}/`, { name: data.name });
}
