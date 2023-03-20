const URL = "http://localhost:3000";

const updateMetaData = (img, desc) => {
  const data = {
    description: desc ? desc : " ",
  };

  console.log(`${URL}/${img} data : ${data}`);
  fetch(`${URL}/${img}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((_) => alert("La description a bien été modifié"))
    .catch((err) => console.log(err));
};

const getMetaData = (img) => {
  console.log(`${URL}`);
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
  })
    .then((res) => res.json())
    .then((_) => alert("La description a bien été supprimé"))
    .catch((err) => console.log(err));
};
