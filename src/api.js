const BASE_URL = 'https://thinkful-list-api.herokuapp.com/donovanle';


const getItems = function () {
  return fetch(`${BASE_URL}/items`);
};

function updateItem(id, updateData){
    return fetch(`${BASE_URL}/items/${id}`,{
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updateData)
    })
}

const createItem = function (name) {
  const newItem = JSON.stringify({ name });

  return fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: newItem
  });
};

export default {
  getItems,
  createItem,
  updateItem
};