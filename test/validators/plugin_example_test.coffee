validationsLibrary = require("composed-validations")
validator          = require("../../lib/validators/plugin_example.coffee")(validationsLibrary)
errorMessage       = "is not a hello text"

describe "Hello Validator Plugin Example", ->
  describe "Passing Invalid Text", ->
    it "expect to fail passing bad text", ->
      helloValidator = validator()

      expect(-> helloValidator.test("bad text")).throw(errorMessage)
      expect(-> helloValidator.test("world")).throw(errorMessage)
      expect(-> helloValidator.test("h3ll0")).throw(errorMessage)

  describe "Passing valid Hello", ->
    it "expect to pass", ->
      helloValidator = validator()

      expect(helloValidator.test("hello")).eq "hello"
