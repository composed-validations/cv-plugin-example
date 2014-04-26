// This is your example plugin
// Notice that, you must return value or throw an error
// That's all you need to know
// Your can also have options in your plugin

module.exports = function(cv) {
  return function(options) {
    if (options == null) {
      options = {};
    }
    return {
      test: function(value) {
        if (value !== 'hello') {
          throw cv.error("is not a hello text", value, this);
        }
        return value;
      }
    };
  };
};
