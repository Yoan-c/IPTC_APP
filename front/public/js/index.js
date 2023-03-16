const modif = document.getElementById("modif");
createListImg();
if (modif) {
  modif.addEventListener("click", () => {
    const img = document.getElementById("img1");
    const iptcDesc1 = document.getElementById("iptcDesc1").value;
    let src = img.src.split("/");
    src = src[src.length - 1];
    console.log(src);
    updateMetaData(src, iptcDesc1);
    //getMetaData(src);
    createListImg();
  });
}
