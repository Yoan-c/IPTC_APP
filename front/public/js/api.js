const URL = "http://127.0.0.1:3000";

const updateMetaData = (img, desc) => {
  const data = {
    description: desc ? desc : " ",
  };

  fetch(`${URL}/${img}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).catch((err) => console.log(err));
};

const getMetaData = (img) => {
  fetch(`${URL}/`, {
    method: "get",
  })
    .then((res) => res.json())
    .then((res) => {
      createListImg(res);
    })
    .catch((err) => console.log(err));
};

const deleteMetaData = (img) => {
  fetch(`${URL}/${img}`, {
    method: "DELETE",
  }).catch((err) => console.log(err));
};
