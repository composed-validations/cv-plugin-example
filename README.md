Example Plugin for Composed Validations Library
==============================

[![Build Status](https://drone.io/github.com/composed-validations/composed-validations-plugin-example/status.png)](https://drone.io/github.com/composed-validations/composed-validations-plugin-example/latest)

This is a example plugin. Clone this repo and create your own plugin for the composed validations library.

# Installation
```
npm install cv-plugin-example
```

# How to Use
```javascript
var validations = require('composed-validations');
var helloValidator = require('cv-plugin-example')(validations);

var validator = helloValidator()

validator.test("hello") // will return hello (valid)
validator.test("world") // false (will throw an error with the error message: is not a hello text)

```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](http://djalmaaraujo.mit-license.org)
