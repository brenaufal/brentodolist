const API_URL = 'https://brentodolist-production.up.railway.app';

export const fetchTasks = async () => {
  const response = await fetch(`${API_URL}/api/tasks`);
  return response.json();
};

export const createTask = async (title) => {
  const response = await fetch(`${API_URL}/api/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title })
  });
  return response.json();
};

export const updateTask = async (id, title, completed) => {
  const response = await fetch(`${API_URL}/api/tasks/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, completed })
  });
  return response.json();
};

export const deleteTask = async (id) => {
  const response = await fetch(`${API_URL}/api/tasks/${id}`, {
    method: 'DELETE'
  });
  return response.json();
};