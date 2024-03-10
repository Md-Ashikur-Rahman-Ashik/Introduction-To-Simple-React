// localStorage.setItem("userId", 87952214);

const addToLocalStorage = () => {
  const idInput = document.getElementById("storageId");
  const id = idInput.value;

  const idValue = document.getElementById("storageValue");
  const value = idValue.value;

  if (id && value) {
    localStorage.setItem(id, value);
  }

  idInput.value = "";
  idValue.value = "";
};