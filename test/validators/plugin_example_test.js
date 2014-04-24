var errorMessage, validationsLibrary, validator;

validationsLibrary = require("composed-validations");
validator          = require("../../lib/validators/plugin_example.js")(validationsLibrary);
errorMessage       = "is not a hello text";

describe("Hello Validator Plugin Example", function() {
  describe("Passing Invalid Text", function() {
    it("expect to fail passing bad text", function() {
      var helloValidator = validator();

      expect(function() {
        helloValidator.test("bad text");
      }).throw(errorMessage);

      expect(function() {
        helloValidator.test("world");
      }).throw(errorMessage);

      expect(function() {
        helloValidator.test("h3ll0");
      }).throw(errorMessage);

    });
  });

  describe("Passing valid Hello", function() {
    it("expect to pass", function() {
      var helloValidator = validator();

      expect(helloValidator.test("hello")).eq("hello");
    });
  });
});
