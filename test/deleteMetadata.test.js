const deleteMetadata = require("./deleteMetadata");
/*
test("ajout description : test description", () => {
  return addMetadata("test description").then((data) => {
    expect(data).toBe("test description");
  });
});
*/
test("delete description vide", () => {
  return expect(deleteMetadata("")).resolves.toBe("success");
});
test("delete description null", () => {
  return expect(deleteMetadata(null)).rejects.toMatch("error");
});
test("delete description sans argument", () => {
  return expect(deleteMetadata()).resolves.toBe("success");
});
