const { createAlertRequestFrom } = require("../src/alert");
const expect = require("chai").expect;

describe("Alert Request", () => {
  describe("Tags parsing", () => {
    it("should retrieve multiple tags", () => {
      const request = createAlertRequestFrom({ tags: "kuku,popo" });
      expect(request.tags).to.include("kuku", "popo");
    });

    it("should ignore spaces in tags string", () => {
      const request = createAlertRequestFrom({ tags: " kuku,popo " });
      expect(request.tags).to.include("kuku", "popo");
    });

    it("should remove empty parameters from the request", () => {
      const request = createAlertRequestFrom({ empty_value: "" });
      expect(request).to.not.have.property("empty_value");
    });
  });
});
