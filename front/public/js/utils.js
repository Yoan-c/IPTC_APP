// boucle et creer le dom en ajoutant les image et les cards
const createListImg = (data) => {
  // A modifier avec la valeur DATA
  const tab = [
    {
      name: "blog-793047_1920.jpg",
      description: "description test",
    },
    {
      name: "blog-2355684_1280.jpg",
      description: "description test 2",
    },
  ];

  let row = document.getElementById("row");
  row.innerHTML = "";
  let i = 0;
  for (i = 0; i < tab.length; i++) {
    const col = document.createElement("div");
    col.classList.add("col", "mt-2");

    const card = document.createElement("div");
    card.classList.add("card");
    card.style = "width: 18rem; min-height: 22rem";

    const img = document.createElement("img");
    // A MODIFIER avec les vrai chemin des photo
    img.src = `../public/images/${tab[i].name}`;
    img.alt = "photo";
    img.id = `img${i}`;
    img.classList.add("card-img-top");

    const cardBody = createDomElement(null, "div", null, [
      "card-body",
      "d-flex",
      "flex-column",
      "justify-content-between",
    ]);

    const cardTitle = createDomElement(
      null,
      "h5",
      null,
      ["card-title"],
      null,
      "IPTC Description :"
    );

    const textarea = createDomElement(null, "textarea", `iptcDesc${i}`, [
      "card-text",
    ]);

    const divBtn = document.createElement("div");
    divBtn.classList.add("mt-2");

    let btnModif = createDomElement(
      i,
      "button",
      `btnModif${i}`,
      ["btn", "btn-primary", "m-2"],
      null,
      "Modifier"
    );

    let btnSupp = createDomElement(
      i,
      "button",
      `btnSupp${i}`,
      ["btn", "btn-danger"],
      null,
      "Supprimer"
    );
    // on ajoute les boutons
    divBtn.appendChild(btnModif);
    divBtn.appendChild(btnSupp);

    // on ajoute les elements de la card
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(textarea);
    cardBody.appendChild(divBtn);

    card.appendChild(img);
    card.appendChild(cardBody);

    col.appendChild(card);

    row.appendChild(col);
  }
};

// permet de creer un element du dom
function createDomElement(click, elem, id, className, style, text) {
  const data = document.createElement(elem);
  if (id) data.id = id;
  if (style) data.style = style;
  if (text) data.innerText = text;
  if (className && className.length > 0)
    for (let i = 0; i < className.length; i++) {
      data.classList.add(className[i]);
    }
  if (click !== null && Number.isInteger(click) >= 0) {
    console.log(click);
    data.addEventListener("click", () =>
      GetClick(data.id, `iptcDesc${click}`, click)
    );
  }
  return data;
}
// On recupere les information de src et description
function GetClick(elem, data, index) {
  let desc = document.getElementById(data);
  const img = document.getElementById(`img${index}`);
  let src = img.src.split("/");
  src = src[src.length - 1];
  if (elem.indexOf("Supp") > 0) {
    desc.value = "";
  }
  updateMetaData(src, desc.value);
}
