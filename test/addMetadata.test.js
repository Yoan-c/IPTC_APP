const addMetadata = require("./addMetadata");

test("ajout description : test description", () => {
  return expect(addMetadata("test description")).resolves.toBe(
    "test description"
  );
});
test("ajout description : test ", () => {
  return expect(addMetadata("test")).resolves.toBe("test");
});
test("ajout description : test ", () => {
  return expect(addMetadata(null)).rejects.toMatch("error");
});
