# This is your example plugin
# Notice that, you must return value or throw an error
# That's all you need to know
# Your can also have options in your plugin

module.exports = (cv) ->
  (options = {}) ->
    test: (value) ->
      unless value is 'hello'
        throw new cv.ValidationError("is not a hello text", value, this)

      value
